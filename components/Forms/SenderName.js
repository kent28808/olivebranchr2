import { useContext, useState } from "react";
import { MessageContext, setMessageValues } from "../../context/MessageContext";

export default function SenderName(props) {
  const context = useContext(MessageContext);
  const { setMessageValues, message } = context;

  const handleSubmit = (e) => {
    e.preventDefault();

    let recipientName = e.target.recipientname.value;
    let keyName = "recipientName";
    setMessageValues(keyName, recipientName); // State is not updating properly

    console.log("Message2:", message); // Console.log shows blank string here but on Screen Page, state is updated
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='sendername'>Sender</label>

      <input type='text' id='sender' name='recipientname' required />
      <button type='submit'>Submit</button>
    </form>
  );
}
