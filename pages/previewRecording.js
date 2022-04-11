import ButtonSymbol from "../components/ButtonSymbol";
import arrow from "../public/arrow.png";

export default function previewRecording() {
  return (
    <div className='container'>
      <h3>Sounds great!</h3>
      <br></br>
      <p>View img of audio recording here</p>
      <ButtonSymbol
        href='/previewMessage'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
