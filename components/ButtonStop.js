import Image from "next/image";
import buttonStop from "../public/svg/button_stop_recording.svg";

export default function RecordButton(props) {
  return (
    <button
      className='button-round'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Image src={buttonStop} alt='stop icon' />
    </button>
  );
}
