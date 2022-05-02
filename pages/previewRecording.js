import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonForward from "../components/ButtonForward";
import Image from "next/image";
import progressBar4 from "../public/progress/progressbar_step4.png";

export default function Previewrecording() {
  const { message } = useContext(MessageContext);

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
      <br />
      <h2 className='heading'>Sounds good!</h2>
      <audio src={message.blobURL} controls='controls' />
      <br />
      <br />
      {/* <p className='body'>{`${JSON.stringify(message)}`}</p> */}
      <ButtonForward innerRef='/previewMessage' />
    </div>
  );
}
