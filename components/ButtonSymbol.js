import Link from "next/link";
import Image from "next/image";
import arrow from "../public/arrow.png";

export default function NextButton(props) {
  return (
    <div className='button-next'>
      <Link href={props.href} passHref>
        {/* <p>Next</p> */}
        <Image src={arrow} alt='arrow icon' />
      </Link>
    </div>
  );
}
