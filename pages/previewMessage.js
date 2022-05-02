import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonForward from "../components/ButtonForward";
import ButtonBack from "../components/ButtonBack";
import Image from "next/image";
import progressBar5 from "../public/progress/progressbar_step5.png";

export default function Previewmessagescreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image
          src={progressBar5}
          className='OB-image'
          alt='progress bar5 logo'
        />
      </div>
      <ButtonBack innerRef='/previewRecording' headerText='Thanks for sharing!' />
      <p className='body'>
        Here's a preview of the Olive Branch that we created for you to
        {message.recipientName}
      </p>
      <br></br>
      <p className='body'>
        Hey {message.recipientName}, you just recieved an Olive Branch from{" "}
        {message.senderName}, who wants to reconnect with you. Tap the voice
        message below to listen!
      </p>
      <ButtonForward innerRef='/recipientNumber' />
    </div>
  );
}
