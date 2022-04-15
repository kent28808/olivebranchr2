import { useContext, useState, useEffect } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";
import MicRecorder from "mic-recorder-to-mp3"; // https://www.npmjs.com/package/mic-recorder-to-mp3
import Image from "next/image";
import progressBar4 from "../public/progress/progressbar_step4.png";
import buttonRecording from "../public/button_recording.svg";
import buttonStop from "../public/button_stop_recording.svg";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default function recordMessage() {
  const { message, setMessageValues } = useContext(MessageContext);
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setisBlocked] = useState(false);

  function startRecording() {
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

  function stopRecording() {
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
      <h2 className='heading'>Next, let {message.recipientName} hear you.</h2>
      <p className='body'>
        Record an empathetic commitment statement as a voice message. Not sure
        what to say? We've got one ready for you.
      </p>
      <b />
      <p className='body'>
        {" "}
        Hey {message.recipientName}, I want you to know that you are very
        important to me. I am committed to this relationship and I promise that
        we will this out together.
      </p>
      <header>
        {!isRecording ? (
          <button
            className='button-round'
            onClick={(e) => startRecording(e)}
            disabled={isRecording}
          >
            <Image src={buttonRecording} alt='mic icon' />
          </button>
        ) : (
          <button
            className='button-round'
            onClick={(e) => stopRecording(e)}
            disabled={!isRecording}
          >
            <Image src={buttonStop} alt='stop icon' />
          </button>
        )}
      </header>
      <p className='body'>{`${JSON.stringify(message)}`}</p>
      <ButtonSymbol innerRef='/previewRecording' />
    </div>
  );
}
