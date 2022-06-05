import Image from "next/image";
import { useContext } from "react";
import Header from "../components/Header";
import ButtonForward from "../components/ButtonForward";
import { MessageContext } from "../context/MessageContext";
import progressBar5 from "../public/progress/progressbar_step5.png";

export default function Previewmessagescreen() {
  const { message } = useContext(MessageContext);
  const messageStr = `Hey ${message.recipientName},\n\nYou just recieved an Olive Branch from ${message.senderName}, who wants to reconnect with you. Tap the voice message below to listen!`;

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image
          src={progressBar5}
          className='OB-image'
          alt='progress bar5 logo'
        />
      </div>
      <Header innerRef='/previewRecording' headerText='Thanks for sharing!' />
      <p className='body'>
        Here is a preview of the Olive Branch that we created for you. Would you
        like us to help you deliver the message?
      </p>
      <div className='preview-message-container'>
        <div className='bubble'>
          <div className='message'>{messageStr}</div>
        </div>
        <audio src={message.blobURL} controls='controls' />
      </div>
      {/* <p className='body'>{`${JSON.stringify(message)}`}</p> */}
      <br></br>
      <ButtonForward innerRef='/recipientNumber' />
    </div>
  );
}
