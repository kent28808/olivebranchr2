import Link from "next/link";

export default function previewPhoto() {
  return (
    <div>
      <h1>Looks great!</h1>
      <br></br>
      <p>Preview photo here</p>
      <Link href='/recordMessage' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
}
