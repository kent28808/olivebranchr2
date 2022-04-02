import Link from "next/link";

const previewPhoto = () => {
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
};

export default previewPhoto;
