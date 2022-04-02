import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import GetFormData from "../components/Forms/GetFormData";

export default function recipientNameScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div>
      <h1>Hey {message.senderName}, who are you reaching out to?</h1>
      <GetFormData
        dataType='text'
        msgKey='recipientName'
        inputId='recipient-name'
      />
      <p>{`${JSON.stringify(message)}`}</p>
      <Link href='/uploadPhoto' passHref>
        <button>{">>"}</button>
      </Link>
    </div>
  );
}
