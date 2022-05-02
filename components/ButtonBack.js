import Link from "next/link";
import Image from "next/image";
import buttonBack from "../public/button_back.svg";

export default function BackButton(props) {
  return (
    <div className='button-container'>
      <Link href={props.innerRef} passHref>
        <span>
          <Image src={buttonBack} alt='arrow icon' />
        </span>
      </Link>
      <h2 className='heading'>{props.headerText}</h2>
    </div>
  );
}
