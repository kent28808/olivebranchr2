import Link from "next/link";

export default function timerScreen() {
  return (
    <div>
      <h2 className='heading'>
        Lastly, let Jen know when you'd be ready to talk again.
      </h2>
      <br></br>
      <p className='body'>Timer</p>
      <Link href='/previewMessage' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
}
