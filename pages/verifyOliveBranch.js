import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";

export default function verifyOliveBranch({ oliveBranches }) {
  const { ob, setObValues } = useContext(MessageContext);

  async function validateRecipient(e) {
    e.preventDefault();
    let verifyPhone = e.target.verifyPhone.value;
    let verifyCode = e.target.verifyCode.value;

    let arr = oliveBranches.data.filter(
      (e) => e.recipientNumber === verifyPhone
    );
    let match = arr.find((e) => e.verifyCode === verifyCode);

    // Check if validated
    if (match) {
      setObValues(match);
    }
  }

  return (
    <div className='container'>
      {/* <p className='body'>{`${JSON.stringify(ob)}`}</p> */}
      <form onSubmit={(e) => validateRecipient(e)}>
        <input type='text' name='senderNumber' id='verifyPhone' required />
        <input type='text' name='verifyCode' id='verifyCode' required />
        <button className='button-text' type='submit'>
          Validate
        </button>
      </form>
      <ButtonSymbol innerRef='/displayOliveBranch' />
    </div>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/oliveBranch", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let oliveBranches = await res.json();
  console.log("Hi", oliveBranches);

  return {
    props: { oliveBranches },
  };
}
