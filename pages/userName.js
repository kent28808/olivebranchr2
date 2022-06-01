import Image from "next/image";
import ButtonBack from "../components/ButtonBack";
import GetFormData from "../components/Forms/GetFormData";
import progressBar1 from "../public/progress/progressbar_step1.png";

export default function Usernamescreen() {
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
    </div>
  );
}
