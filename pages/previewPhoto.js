import Image from "next/image";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";

export default function previewPhoto() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <h3>Looks great!</h3>
      <br></br>
      <p>Preview photo here</p>
      <Image src={message.imgURL} className='preview-img' layout='fill' />
      <ButtonSymbol innerRef='/recordMessage' />
    </div>
  );
}
