import { useContext, useState } from "react";
import { MessageContext } from "../../context/MessageContext";

export default function SenderName(props) {
  const context = useContext(MessageContext);
  const { setMessageValues } = context;

  async function handleSubmit(key, event) {
    event.preventDefault();

    let recipientName = event.target.recipientname.value;
    setMessageValues(key, recipientName);
  }

  return (
    <form onSubmit={(e) => handleSubmit(props.data, e)}>
      <label htmlFor='sendername'>Sender</label>

      <input type='text' id='sender' name='recipientname' required />
      <button type='submit'>Submit</button>
    </form>
  );
}
