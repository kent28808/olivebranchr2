import Link from "next/link";
import Image from "next/image";
import arrow from "../public/arrow.png";

export default function NextButton(props) {
  return (
    <div className='button-next'>
      <Link href={props.innerRef} passHref>
        {/* <p>Next</p> */}
        <a>
          <Image src={arrow} alt='arrow icon' />
        </a>
      </Link>
    </div>
  );
}
