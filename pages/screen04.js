import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const name2screen = () => {
  const value = useContext(MessageContext);
  console.log(value);
  return (
    <div>
      <h1>Who are you reaching out to?</h1>
      <p>Enter your partners name {value.recipient}</p>
      <Link href='/screen05'>
        <a>next</a>
      </Link>
    </div>
  );
};

export default name2screen;
