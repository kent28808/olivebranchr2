import MicRecorder from "mic-recorder-to-mp3"; // https://www.npmjs.com/package/mic-recorder-to-mp3
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import ButtonBack from "../components/ButtonBack";
import ButtonRecord from "../components/ButtonRecord";
import ButtonStop from "../components/ButtonStop";
import ButtonForward from "../components/ButtonForward";
import { MessageContext } from "../context/MessageContext";
import progressBar4 from "../public/progress/progressbar_step4.png";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default function Recordmessage() {
  const { message, setMessageValues } = useContext(MessageContext);
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setisBlocked] = useState(false);

  function Startrecording() {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => console.error("Error starting recording: ", e));
    }
  }

  function Stoprecording() {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // Set date to timestamp the file name
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Zero indexed
        const day = date.getDate(); // Returns day of the week

        // Create audio file and save in messageContext
        const file = new File(
          buffer,
          `${year}.${month}.${day}.${message.senderName}Recording.mp3`,
          {
            type: blob.type,
            lastModified: Date.now(),
          }
        );
        setMessageValues("audioFile", file); // Not updating state with file data, address later

        // Create a blobURL and save in messageContext to playback audio
        const blobURL = URL.createObjectURL(blob); // A blob is the captured mp3 audio
        setMessageValues("blobURL", blobURL);
        setIsRecording(false);
      })
      .catch((e) => console.log("Error stopping recording: ", e));
  }

  useEffect(() => {
    // Using a promise based getUserMedia() https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    navigator.getUserMedia(
      { audio: true }, // Ask web browser for permission to use mic
      () => {
        console.log("Accepted");
        setisBlocked(false);
      },
      () => {
        console.log("Rejected");
        setisBlocked(true);
      }
    );
  }, [isBlocked]);

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image
          src={progressBar4}
          className='OB-image'
          alt='progress bar4 logo'
        />
      </div>
      <ButtonBack
        innerRef='/previewPhoto'
        headerText={`Next, let ${message.recipientName} hear you.`}
      />
      <p className='body'>
        Record an empathetic commitment statement as a voice message. Not sure
        what to say? We've got one ready for you.
      </p>
      <br />
      {/* If context does not have recording, show record/stop buttons. Otherwise, show a preview of the recording */}
      {message.blobURL === "" ? (
        <>
          <p className='body'>
            {" "}
            Hey {message.recipientName}, I want you to know that you are very
            important to me. I am committed to this relationship and I promise
            that we will this out together.
          </p>
          <header>
            {!isRecording ? (
              <ButtonRecord
                onClick={(e) => Startrecording(e)}
                disabled={isRecording}
              />
            ) : (
              <ButtonStop
                onClick={(e) => Stoprecording(e)}
                disabled={!isRecording}
              />
            )}
          </header>
        </>
      ) : (
        <>
          <h2 className='heading'>Sounds good!</h2>
          <audio src={message.blobURL} controls='controls' />
          <br />
        </>
      )}
      <br />
      {/* <p className='body'>{`${JSON.stringify(message)}`}</p> */}
      <ButtonForward innerRef='/previewMessage' />
    </div>
  );
}
