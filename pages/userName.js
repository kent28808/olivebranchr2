import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext"; // Wrap in {} b/c exported context w/o keyword default
import GetFormData from "../components/Forms/GetFormData";

export default function userNameScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div>
      <h3>What's your name?</h3>
      <GetFormData dataType='text' msgKey='senderName' inputId='sender-name' />
      <p>{`${JSON.stringify(message)}`}</p>
      <Link href='/recipientName' passHref>
        <button>{">>"}</button>
      </Link>
    </div>
  );
}
