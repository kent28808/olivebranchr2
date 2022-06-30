import styles from "../styles/Button.module.scss";
import Link from "next/link";
import Image from "next/image";
import buttonUpload from "../public/svg/button_upload.svg";

export default function ButtonUpload(props) {
  return (
    <div className='button-container'>
      <div className='button-long-text'>
        <Link href={props.innerRef} passHref>
          <span className={`${styles["button-text"]} upload`}>
            {props.text}
            <span>
              <Image src={buttonUpload} alt='arrow icon' />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
