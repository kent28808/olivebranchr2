import ButtonWithText from "../components/ButtonWithText";
import arrow from "../public/arrow.png";

export default function initialHelpscreen() {
  return (
    <div className='container'>
      <h3>Recovering a fight with loved ones it's stressful.</h3>
      <p>
        It's even harder to reach out and start reconciliation process in such
        emotional times.
      </p>
      <h3>Let us help you with that.</h3>
      <p>
        Send a customized message, break through the cold silence, and rekindle
        the emotional connection with your partner, so you can get talking again
        in a kind and compassionate way.
      </p>
      <ButtonWithText
        href='/userName'
        text='Create your own Olive Branch'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
