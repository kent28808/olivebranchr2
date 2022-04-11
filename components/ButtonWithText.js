import Link from "next/link";
import Image from "next/image";

export default function ButtonWithText(props) {
  return (
    <div className='button'>
      <Link href={props.href} passHref>
        <span className='button-text'>
          {props.text}
          <Image src={props.img} alt='arrow icon' className='Vector-7' />
        </span>
      </Link>
    </div>
  );
}
