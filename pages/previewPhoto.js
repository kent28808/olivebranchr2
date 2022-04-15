import Image from "next/image";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";
import progressBar3 from "../public/progress/progressbar_step2.png"

export default function previewPhoto() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
       <div className='progressbranch'>
      <Image
        src={progressBar3}
        className='OB-image'
        alt='progress bar3 logo'
      />
      </div>
      <h3>Looks great!</h3>
      <br></br>
      <p>Preview photo here</p>
      <Image src={message.imgURL} className='preview-img' layout='fill' />
      <ButtonSymbol innerRef='/recordMessage' />
    </div>
  );
}
