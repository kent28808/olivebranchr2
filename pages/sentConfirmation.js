import Image from "next/image";
import oliveBranch from "../public/confirmation/ob-image.png";
import oliveBranch2x from "../public/confirmation/ob-image@2x.png";
import oliveBranch3x from "../public/confirmation/ob-image@3x.png";
import arrow from "../public/arrow.png";
import ButtonWithText from "../components/ButtonWithText";

export default function sentConfirmationScreen() {
  return (
    <div className='container'>
      <h1>Olive Branch delivered!</h1>
      <p>
        You just took a very important step by letting your partner know how
        much you are committed to the relationship.
      </p>
      <p>
        Even if you don't get an immediate response, don't get upset! Some
        people just need more time.
      </p>
      <Image
        src={oliveBranch}
        srcSet={`${oliveBranch2x} 2x, ${oliveBranch3x} 3x`}
        class='OB-image'
        alt='olive branch logo'
      />
      <ButtonWithText
        href='/'
        text='Return to home'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
