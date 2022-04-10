import Link from "next/link";
import Image from "next/image";

export default function ButtonWithSymbol(props) {
  return (
    <div className='button'>
      <Link href={props.href} passHref>
        <span className='button-text'>
          <Image src={props.img} className={props.imgClassName} />
        </span>
      </Link>
    </div>
  );
}
