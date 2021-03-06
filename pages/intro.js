import ButtonWithText from "../components/ButtonWithText";
import ButtonWithTextOnboarding from "../components/ButtonWithTextOnboarding";

export default function initialHelpscreen() {
  return (
    <div className='container'>
      <h2 className='heading'>
        Recovering from a fight with loved ones is hard.
      </h2>
      <div>
        <p className='body'>
          The hardest part is reaching out and initiating the reconcilation
          process during such emotional times.
        </p>
      </div>
      <div>
        <h2 className='heading'>Let us help you with that.</h2>
      </div>
      <div>
        <p className='body'>
          Send a customized message and rekindle the emotional connection with
          your partner, so you can get talking again in a kind and compassionate
          way.
        </p>
      </div>
      <ButtonWithTextOnboarding
        innerRef='/userName'
        text='Create your own Olive Branch'
      />
    </div>
  );
}
