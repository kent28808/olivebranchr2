import styles from "../styles/Header.module.scss";
// import ButtonWithTextOnboarding from "../components/ButtonWithTextOnboarding";
import ButtonWithText from "../components/ButtonWithText";

export default function initialHelpscreen() {
  return (
    <div className='container'>
      <h2 className={styles.heading}>
        Recovering from a fight with loved ones is hard.
      </h2>
      <div>
        <p className='body'>
          The hardest part is reaching out and initiating the reconcilation
          process during such emotional times.
        </p>
      </div>
      <div>
        <h2 className={styles.heading}>Let us help you with that.</h2>
      </div>
      <div>
        <p className='body'>
          Send a customized message and rekindle the emotional connection with
          your partner, so you can get talking again in a kind and compassionate
          way.
        </p>
      </div>
      <ButtonWithText
        innerRef='/userName'
        text='Create your own Olive Branch'
      />
    </div>
  );
}
