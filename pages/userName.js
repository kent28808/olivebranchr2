import { useContext } from "react";
import { MessageContext } from "../context/MessageContext"; // Wrap in {} b/c exported context w/o keyword default
import GetFormData from "../components/Forms/GetFormData";
import ButtonSymbol from "../components/ButtonSymbol";
import arrow from "../public/arrow.png";

export default function userNameScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <h3>What's your name?</h3>
      <GetFormData dataType='text' msgKey='senderName' inputId='sender-name' />
      <p>{`${JSON.stringify(message)}`}</p>
      <ButtonSymbol href='/recipientName' />
    </div>
  );
}
