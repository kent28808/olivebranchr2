import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import Image from "next/image";

export default function displayOliveBranch() {
  const { ob } = useContext(MessageContext);

  return (
    <div className='container'>
      <p>{`${JSON.stringify(ob)}`}</p>
      <h1>{ob.senderName}</h1>
      <Image src={ob.imgURL} className='preview-img' layout='fill' />
      <audio src={ob.blobURL} controls='controls' />
    </div>
  );
}
