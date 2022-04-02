import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import GetFormData from "../components/Forms/GetFormData";

export default function recipientPhoneScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div>
      <h1>OK. What's {message.recipientName}'s phone number?</h1>
      <GetFormData
        dataType='tel'
        msgKey='recipientNumber'
        inputId='recipient-number'
        pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
      />
      <br />
      <p>Please enter your 10 digit phone number (no dashes)</p>
      {/* US numbers only right now */}
      <p>{`${JSON.stringify(message)}`}</p>
      <Link href='/sentConfirmation' passHref>
        <button>{">>"}</button>
      </Link>
    </div>
  );
}
