import Image from "next/image";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext"; // Wrap in {} b/c exported context w/o keyword default
import GetFormData from "../components/Forms/GetFormData";
import progressBar1 from "../public/progress/progressbar_step1.png";
import ButtonBack from "../components/ButtonBack";

export default function Usernamescreen() {
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
      <ButtonBack innerRef='/intro' headerText="What's your name?" />
      <GetFormData
        inputType='text'
        inputId='sender-name'
        msgKey='senderName'
        href='/recipientName'
        buttonType='symbol'
      />
      {/* <p className='body'>{`${JSON.stringify(message)}`}</p> */}
    </div>
  );
}
