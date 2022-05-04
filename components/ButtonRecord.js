import Image from "next/image";
import buttonRecord from "../public/svg/button_recording.svg";

export default function RecordButton(props) {
  return (
    <button
      className='button-round'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Image src={buttonRecord} alt='mic icon' />
    </button>
  );
}
