import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import Image from "next/image";

export default function Displayolivebranch() {
  const { ob } = useContext(MessageContext);

  return (
    <div className='container'>
<<<<<<< HEAD
      <p>{`${JSON.stringify(ob)}`}</p>
      <h1>{ob.senderName}</h1>
      <Image src={ob.imgURL} className='preview-img' layout='fill'/>
=======
      {/* <p className='body'>{`${JSON.stringify(ob)}`}</p> */}
      <h1 className='title'>{ob.senderName}</h1>
      <Image src={ob.imgURL} className='preview-img' layout='fill' />
>>>>>>> f7dc97745700022d2b7e5acf63361437ad9b944b
      <audio src={ob.blobURL} controls='controls' />
    </div>
  );
}
