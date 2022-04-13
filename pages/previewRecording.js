import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";

export default function previewRecording() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <h3>Next, let {message.recipientName} hear you.</h3>
      <p>
        Record an empathetic commitment statement as a voice message. Not sure
        what to say? We've got one ready for you.
      </p>
      <br />
      <h3>Sounds good!</h3>
      <audio src={message.blobURL} controls='controls' />
      <p>{`${JSON.stringify(message)}`}</p>
      <ButtonSymbol innerRef='/previewMessage' />
    </div>
  );
}
