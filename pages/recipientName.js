import Image from "next/image";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import GetFormData from "../components/Forms/GetFormData";
import progressBar2 from "../public/progress/progressbar_step2.png";

export default function recipientNameScreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image
          src={progressBar2}
          className='OB-image'
          alt='progress bar2 logo'
        />
      </div>
      <h2 className='heading'>
        Hey {message.senderName}, who are you reaching out to?
      </h2>
      <GetFormData
        inputType='text'
        inputId='recipient-name'
        msgKey='recipientName'
        href='/uploadPhoto'
        buttonType='symbol'
      />
      <p className='body'>{`${JSON.stringify(message)}`}</p>
    </div>
  );
}
