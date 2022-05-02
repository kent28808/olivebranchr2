import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import GetFormData from "../components/Forms/GetFormData";
import ButtonBack from "../components/ButtonBack";
import Image from "next/image";
import progressBar6 from "../public/progress/progressbar_step6.png";

export default function Recipientphonescreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image
          src={progressBar6}
          className='OB-image'
          alt='progress bar6 logo'
        />
      </div>
      <ButtonBack
        innerRef='/previewMessage'
        headerText={`What's ${message.recipientName}'s phone number?`}
      />
      <GetFormData
        dataType='tel'
        msgKey='recipientNumber'
        inputId='recipient-number'
        pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
        href='/sentConfirmation'
      />
      <br />
      {/* <p className='body'>
        Please enter your 10 digit phone number (no dashes)
      </p> */}
      {/* US numbers only right now */}
      {/* <p className='body'>{`${JSON.stringify(message)}`}</p> */}
    </div>
  );
}
