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
      <SenderName />
      <p>{message.recipientName}</p>
      <h1>What is your name?</h1>
      <p>Enter your name here</p>
      <Link href='/screen04' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
}
