import Link from "next/link";

export default function previewPhoto() {
  return (
    <div>
      <h3>Looks great!</h3>
      <br></br>
      <p>Preview photo here</p>
      <Link href='/recordMessage' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
}
