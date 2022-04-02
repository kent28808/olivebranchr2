import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const name2screen = () => {
  const value = useContext(MessageContext);
  console.log(value);
  return (
    <div>
      <h1>Hey Cody, who are you reaching out to?</h1>
      {/* Insert form component here */}
      <Link href='/uploadPhoto' passHref>
        <button>{">>"}</button>
      </Link>
    </div>
  );
};

export default name2screen;
