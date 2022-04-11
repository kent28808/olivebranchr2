import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";
import arrow from "../public/arrow.png";

export default function previewMessageScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <h3>Thanks for sharing!</h3>
      <p>
        Here's a preview of the Olive Branch that we created for you to
        {message.recipientName}
      </p>
      <br></br>
      <p>
        Hey {message.recipientName}, you just recieved an Olive Branch from{" "}
        {message.senderName}, who wants to reconnect with you. Tap the voice
        message below to listen!
      </p>
      <ButtonSymbol
        href='/recipientNumber'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
