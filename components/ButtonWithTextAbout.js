import Link from "next/link";
import Image from "next/image";
// import buttonForward from "../public/svg/button_forward.svg";

export default function ButtonWithTextAbout(props) {
  return (
    <div className='button-container'>
      <div className='button-long-text'>
        <Link href={props.innerRef} passHref>
          <span className='button-text about'>
            {props.text}
            {/* <span>
              <Image src={buttonForward} alt='arrow icon' />
            </span> */}
          </span>
        </Link>
      </div>
    </div>
  );
}
