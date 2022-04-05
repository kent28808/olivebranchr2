import Link from "next/link";

export default function previewRecording() {
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
}
