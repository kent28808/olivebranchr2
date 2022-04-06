import Link from "next/link";
import Image from "next/image";
import oliveBranch from "../public/ob-1500x1164.png";

export default function Home() {
  return (
    <div>
      <h1>Olive Branch</h1>
      <Image src={oliveBranch} alt='olive branch logo' />
      <Link href='/intro' passHref>
        <p>Reconnect with your partner after a fight</p>
      </Link>
    </div>
  );
}
