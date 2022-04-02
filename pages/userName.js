import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext"; // Wrap in {} b/c exported context w/o keyword default
import SenderName from "../components/Forms/SenderName";

export default function nameScreen() {
  const { message } = useContext(MessageContext);
  // console.log(value);
  console.log("Message on Page 3", message); // State updated properly

  return (
    <div>
      <h1>What's your name?</h1>
      <SenderName />
      <p>{message.recipientName}</p>
      <Link href='/receipentName' passHref>
        <button>{">>"}</button>
      </Link>
    </div>
  );
}
