import ButtonWithText from "../components/ButtonWithText";
import arrow from "../public/arrow.png";

export default function typeOfUser() {
  return (
    <div className='container'>
      <ButtonWithText
        innerRef='/userName'
        text='I want to send an olive branch'
        img={arrow}
        imgClassName={".Vector-7"}
      />
      <ButtonWithText
        innerRef='/verifyOliveBranch'
        text='I received an olive branch'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
