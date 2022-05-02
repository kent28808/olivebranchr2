import Image from "next/image";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonForward from "../components/ButtonForward";
import progressBar3 from "../public/progress/progressbar_step2.png";
import ButtonBack from "../components/ButtonBack";

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
      <ButtonBack innerRef='/uploadPhoto' headerText='Looks good. Thanks!' />
      <br></br>
      <Image src={message.imgURL}
        className='preview-img'
        alt='preview'
        width='500px'
        height='500px'
      />
      <br />
      <br />
      <ButtonForward innerRef='/recordMessage' />
    </div>
  );
}
