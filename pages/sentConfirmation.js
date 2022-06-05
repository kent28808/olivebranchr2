import Image from "next/image";
import ButtonWithTextAbout from "../components/ButtonWithTextAbout";
import oliveBranch from "../public/confirmation/ob-image.png";
import oliveBranch2x from "../public/confirmation/ob-image@2x.png";
import oliveBranch3x from "../public/confirmation/ob-image@3x.png";

export default function sentConfirmationScreen() {
  return (
    <div className='container'>
      <h1 className='title'>Olive Branch delivered!</h1>
      <p className='body'>
        You just took a very important step by letting your partner know how
        much you are committed to the relationship.
      </p>
      <p className='body'>
        Even if you don't get an immediate response, don't get upset! Some
        people just need more time.
      </p>
      <Image
        src={oliveBranch}
        srcSet={`${oliveBranch2x} 2x, ${oliveBranch3x} 3x`}
        alt='olive branch logo'
      />
      <br />
      <ButtonWithTextAbout innerRef='/' text='Return to home' />
    </div>
  );
}
