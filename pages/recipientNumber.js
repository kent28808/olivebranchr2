import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import GetFormData from "../components/Forms/GetFormData";
import ButtonWithText from "../components/ButtonWithText";
import arrow from "../public/arrow.png";
import Image from "next/image";
import progressBar6 from "../public/progress/progressbar_step6.png"

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
      <h3>OK. What's {message.recipientName}'s phone number?</h3>
      <GetFormData
        dataType='tel'
        msgKey='recipientNumber'
        inputId='recipient-number'
        pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
        text='Send the Olive Branch'
      />
      <br />
      <p>Please enter your 10 digit phone number (no dashes)</p>
      {/* US numbers only right now */}
      <p>{`${JSON.stringify(message)}`}</p>
      <ButtonWithText
        innerRef='/sentConfirmation'
        text='Create your own Olive Branch'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
