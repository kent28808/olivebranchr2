import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import GetFormData from "../components/Forms/GetFormData";
import ButtonSymbol from "../components/ButtonSymbol";
import arrow from "../public/arrow.png";

export default function recipientNameScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div>
      <h3>Hey {message.senderName}, who are you reaching out to?</h3>
      <GetFormData
        dataType='text'
        msgKey='recipientName'
        inputId='recipient-name'
      />
      <p>{`${JSON.stringify(message)}`}</p>
      <ButtonSymbol
        href='/uploadPhoto'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
