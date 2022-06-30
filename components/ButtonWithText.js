import styles from "../styles/Button.module.scss";
import Link from "next/link";
import ButtonForward from "./Svg/BtnFwdSvg.js";

export default function ButtonWithText(props) {
  return (
    <Link href={props.innerRef} passHref>
      {/* Using brackets instead of dot notation to address hypentated CSS class names */}
      <div className={styles["button-container"]}>
        <span className={`${styles["button-text"]} ${props.page}`}>
          {props.text}
        </span>
        <ButtonForward />
      </div>
    </Link>
  );
}
