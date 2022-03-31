import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext"; // Wrap in {} b/c exported context w/o keyword default

const nameScreen = () => {
  const value = useContext(MessageContext);
  console.log(value);

  return (
    <div>
      <h1>What is your name?</h1>
      <p>Enter your name here {value.sender} </p>
      <Link href='/screen05'>
        <a>Next</a>
      </Link>
    </div>
  );
};

export default nameScreen;
