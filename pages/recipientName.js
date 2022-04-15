import Image from "next/image"
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import GetFormData from "../components/Forms/GetFormData";
import ButtonSymbol from "../components/ButtonSymbol";
import progressBar2 from "../public/progress/progressbar_step2.png"

export default function Recipientnamescreen() {
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
      <h3>Hey {message.senderName}, who are you reaching out to?</h3>
      <GetFormData
        dataType='text'
        msgKey='recipientName'
        inputId='recipient-name'
      />
      <p>{`${JSON.stringify(message)}`}</p>
      <ButtonSymbol innerRef='/uploadPhoto' />
    </div>
  );
}
