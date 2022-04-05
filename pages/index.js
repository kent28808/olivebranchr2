import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Olive Branch</h1>
      <Link href='/intro' passHref>
        <p>Reconnect with your partner after a fight</p>
      </Link>
    </div>
  );
}
