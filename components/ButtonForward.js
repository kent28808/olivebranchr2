import styles from "../styles/Button.module.scss";
import Link from "next/link";
import BtnStopSvg from "./Svg/BtnFwdSvg.js";

export default function NextButton(props) {
  return (
    <button className={styles["button-next"]} type={props.type}>
      {props.type === "submit" ? (
        <BtnStopSvg />
      ) : (
        <Link href={props.innerRef} passHref>
          <BtnStopSvg />
        </Link>
      )}
    </button>
  );
}
