import "./Button.module.scss";
import Link from "next/link";
import Image from "next/image";
import buttonForward from "../public/svg/button_forward.svg";

export default function NextButton(props) {
  return (
    <button className='button-next' type={props.type}>
      {props.type === "submit" ? (
        <Image src={buttonForward} alt='button forward svg' />
      ) : (
        <Link href={props.innerRef} passHref>
          <span>
            <Image src={buttonForward} alt='button forward svg' />
          </span>
        </Link>
      )}
    </button>
  );
}
