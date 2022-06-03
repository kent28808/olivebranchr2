import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { useRouter } from "next/router";
import ButtonForward from "../ButtonForward";
import ButtonWithTextSendBranch from "../ButtonWithTextSendBranch";

export default function GetFormData(props) {
  const { setMessageValues } = useContext(MessageContext);
  const router = useRouter();

  async function handleSubmit(key, event) {
    event.preventDefault();

    let formData = event.target[key].value;
    setMessageValues(key, formData);
    router.push(props.href);
  }

  return (
    <form onSubmit={(e) => handleSubmit(props.msgKey, e)}>
      <div className='input-container'>
        <input
          className='input-field'
          type={props.inputType}
          id={props.inputId}
          name={props.msgKey}
          required
        />
      </div>
      <div className='button-container'>
        {props.buttonType === "text" ? (
          <ButtonWithTextSendBranch innerRef={props.href} text={props.text} />
        ) : (
          <ButtonForward type='submit' />
        )}
      </div>
    </form>
  );
}
