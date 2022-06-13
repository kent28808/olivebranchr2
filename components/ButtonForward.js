import styles from "../styles/Button.module.scss";
import Link from "next/link";
import ButtonForward from "./Svg/BtnFwdSvg.js";

export default function NextButton(props) {
  return (
    <button className='button-next' type={props.type}>
      {props.type === "submit" ? (
        <ButtonForward />
      ) : (
        <Link href={props.innerRef} passHref>
          <ButtonForward />
        </Link>
      )}
    </button>
  );
}
