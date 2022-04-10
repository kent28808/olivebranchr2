import Link from "next/link";
import ButtonWithText from "../components/ButtonWithText";
import arrow from "../public/arrow.png";

export default function uploadPhotoScreen() {
  return (
    <div>
      <h3>Next, let's make sure your partner can see you.</h3>
      <br></br>
      <p>
        Pick a moment from your photos to remind both of you the happy days.
      </p>
      <ButtonWithText
        href='/previewPhoto'
        text='Upload photo'
        img={arrow}
        imgClassName={".Vector-7"}
      />
      <Link href='/recordMessage' passHref>
        <p>Skip</p>
      </Link>
    </div>
  );
}
