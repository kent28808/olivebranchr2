import ButtonSymbol from "../components/ButtonSymbol";
import arrow from "../public/arrow.png";

export default function previewPhoto() {
  return (
    <div>
      <h3>Looks great!</h3>
      <br></br>
      <p>Preview photo here</p>
      <ButtonSymbol
        href='/recordMessage'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
