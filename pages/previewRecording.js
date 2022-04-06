import Link from "next/link";

export default function previewRecording() {
  return (
    <div>
      <h3>Sounds great!</h3>
      <br></br>
      <p>View img of audio recording here</p>
      <Link href='/previewMessage' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
}
