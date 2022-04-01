import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

export default function SenderName(props) {
  const value = useContext(MessageContext);
  console.log(`This is the currrent context: ${value}`);

  const handleSubmit = (e) => {
    console.log("This is e: ", e.targe.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='senderName'>Sender</label>
      <input type='text' id='sender' name='sender' required />
      <button type='submit'>Submit</button>
    </form>
  );
}
