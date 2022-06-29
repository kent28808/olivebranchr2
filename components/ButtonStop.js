import styles from "../styles/Button.module.scss";
import BtnStopSvg from "./Svg/BtnStopSvg";

export default function RecordButton(props) {
  return (
    <button
      className={styles["button-round"]}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <BtnStopSvg />
    </button>
  );
}
