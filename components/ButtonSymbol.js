import "./Button.module.scss";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/arrow.png";

export default function NextButton(props) {
  return (
    <button className='button-next' type={props.type}>
      {props.type === "submit" ? (
        <Image src={arrow} alt='arrow icon'/>
      ) : (
        <Link href={props.innerRef} passHref>
          <span>
            <Image src={arrow} alt='arrow icon'/>
          </span>
        </Link>
      )}
    </button>
  );
}
