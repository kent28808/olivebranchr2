import Link from "next/link";

const phoneScreen = () => {
  return (
    <div>
      <h1>OK. What's Jen's phone number?</h1>
      <br></br>
      <p>Enter mobile number here</p>
      <Link href='/sentConfirmation' passHref>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default phoneScreen;
