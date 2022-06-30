import styles from "../../styles/Form.module.scss";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { useRouter } from "next/router";
import ButtonForward from "../ButtonForward";
import ButtonWithText from "../ButtonWithText";
// import ButtonWithTextSendBranch from "../ButtonWithTextSendBranch";

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
      <div className={styles["input-container"]}>
        <input
          className={styles["input-field"]}
          type={props.inputType}
          id={props.inputId}
          name={props.msgKey}
          required
        />
      </div>
      <div className='button-container'>
        {props.buttonType === "text" ? (
          <ButtonWithText
            innerRef={props.href}
            text={props.text}
            page={props.page}
          />
        ) : (
          <ButtonForward type='submit' />
        )}
      </div>
    </form>
  );
}
