import Image from "next/image"
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext"; // Wrap in {} b/c exported context w/o keyword default
import GetFormData from "../components/Forms/GetFormData";
import ButtonSymbol from "../components/ButtonSymbol";
import progressBar1 from "../public/progress/progressbar_step1.png"

export default function userNameScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <div className='progressbranch'>
      <Image
        src={progressBar1}
        className='OB-image'
        alt='progress bar1 logo'
      />
      </div>
      <h3>What's your name?</h3>
      <GetFormData dataType='text' msgKey='senderName' inputId='sender-name' />
      {/* <p>{`${JSON.stringify(message)}`}</p> */}
      <ButtonSymbol innerRef='/recipientName' />
    </div>
  );
}
