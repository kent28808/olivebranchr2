import styles from "../styles/Button.module.scss";
import BtnRecordSvg from "./Svg/BtnRecordSvg";

export default function RecordButton(props) {
  return (
    <button
      className={styles["button-round"]}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <BtnRecordSvg />
    </button>
  );
}
