import Link from "next/link";

export default function timerScreen() {
  return (
    <div>
      <h3>Lastly, let Jen know when you'd be ready to talk again.</h3>
      <br></br>
      <p>Timer</p>
      <Link href='/previewMessage' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
}
