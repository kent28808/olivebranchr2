import Link from "next/link";
import Image from "next/image";

export default function ButtonWithText(props) {
  return (
    <div className='button-long-text'>
      <Link href={props.innerRef} passHref>
        <span className='button-text'>
          {props.text}
          <span>
            <Image src={props.img} alt='arrow icon' />
          </span>
        </span>
      </Link>
    </div>
  );
}
