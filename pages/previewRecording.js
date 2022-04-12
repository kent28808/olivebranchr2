import ButtonSymbol from "../components/ButtonSymbol";

export default function previewRecording() {
  return (
    <div className='container'>
      <h3>Sounds great!</h3>
      <br></br>
      <p>View img of audio recording here</p>
      <ButtonSymbol innerRef='/previewMessage' />
    </div>
  );
}
