import Link from "next/link";

const previewRecording = () => {
  return (
    <div>
      <h1>Sounds great!</h1>
      <br></br>
      <p>View img of audio recording here</p>
      <Link href='/previewMessage' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default previewRecording;
