import ButtonWithText from "../components/ButtonWithText";
import arrow from "../public/arrow.png";

export default function initialHelpscreen() {
  return (
    <div className="container">
      <h3>Recovering from a fight with loved ones is hard.</h3>
      <div className ="body-text">
      <p>
        The hardest part is reaching out and initiating the reconcilation process during such emotional times.
      </p>
      </div>
      <div className="h3intro">
      <h3>Let us help you with that.</h3>
      </div>
      <div className="body-text">
      <p>
        Send a customized message and rekindle the emotional connection with your partner, so you can get talking again in a kind and compassionate way.
      </p>
      </div>
      <ButtonWithText
        innerRef="/typeOfUser"
        text="Create your own Olive Branch"
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
