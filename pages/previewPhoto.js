import ButtonSymbol from "../components/ButtonSymbol";
import arrow from "../public/arrow.png";

export default function previewPhoto() {
  return (
    <div className='container'>
      <h3>Looks great!</h3>
      <br></br>
      <p>Preview photo here</p>
      <ButtonSymbol innerRef='/recordMessage' />
    </div>
  );
}
