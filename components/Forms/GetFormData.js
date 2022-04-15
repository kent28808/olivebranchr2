import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

export default function GetFormData(props) {
  const { setMessageValues } = useContext(MessageContext);

  async function handleSubmit(key, event) {
    event.preventDefault();

    let formData = event.target[key].value;
    setMessageValues(key, formData);
  }

  return (
    <form onSubmit={(e) => handleSubmit(props.msgKey, e)}>
      <input
        type={props.dataType}
        id={props.inputId}
        name={props.msgKey}
        required
      />
      <button className={"button button-text"} type='submit'>
        {props.text}
      </button>
    </form>
  );
}
