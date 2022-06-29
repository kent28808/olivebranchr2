import styles from "../styles/Button.module.scss";
import { useRouter } from "next/router";
import BtnStopSvg from "./Svg/BtnFwdSvg.js";

export default function NextButton(props) {
  const router = useRouter();

  // Using router obj instead of Link component b/c in the latter, child is a functional component, would need to wrap in "React.forwardRef".
  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.innerRef);
  };

  return (
    <button className={styles["button-next"]} type={props.type}>
      {props.type === "submit" ? (
        <BtnStopSvg />
      ) : (
        <a href={props.innerRef} onClick={handleClick}>
          <BtnStopSvg />
        </a>
      )}
    </button>
  );
}
