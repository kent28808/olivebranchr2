import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import buttonBack from "../public/svg/button_back.svg";

export default function HeaderPrompt(props) {
  return (
    <div className={styles.container}>
      <div>
        <Link href={props.innerRef} passHref>
          <span>
            <Image src={buttonBack} alt='arrow icon' />
          </span>
        </Link>
      </div>
      <h2 className={styles.heading}>{props.headerText}</h2>
    </div>
  );
}
