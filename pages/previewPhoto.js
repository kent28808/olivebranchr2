import Image from "next/image";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";
import progressBar3 from "../public/progress/progressbar_step2.png";

export default function Previewphoto() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image
          src={progressBar3}
          className='OB-image'
          alt='progress bar3 logo'
        />
      </div>{" "}
      <h2 className='heading'>Looks great!</h2>
      <br></br>
      <Image
        src={message.imgURL}
        className='preview-img'
        width='500px'
        height='500px'
      />
      <br />
      <br />
      <ButtonSymbol innerRef='/recordMessage' />
    </div>
  );
}
