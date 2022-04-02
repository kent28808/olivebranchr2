import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

export default function GetFormData(props) {
  const context = useContext(MessageContext);
  const { setMessageValues } = context;

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
      <button type='submit'>Submit</button>
    </form>
  );
}
