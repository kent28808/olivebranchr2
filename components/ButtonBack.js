import Link from "next/link";
import Image from "next/image";
import buttonBack from "../public/svg/button_back.svg";

export default function BackButton(props) {
  return (
    <div className='button-container'>
      <div className='button-back'>
        <Link href={props.innerRef} passHref>
          <span>
            <Image src={buttonBack} alt='arrow icon' />
          </span>
        </Link>
      </div>
      <h2 className='heading'>{props.headerText}</h2>
    </div>
  );
}
