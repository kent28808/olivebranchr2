import Link from "next/link";

export default function initialHelpscreen() {
  return (
    <div>
      <h1>Recovering a fight with loved ones it's stressful.</h1>
      <p>
        It's even harder to reach out and start reconciliation process in such
        emotional times.
      </p>
      <h1>Let us help you with that.</h1>
      <p>
        Send a customized message, break through the cold silence, and rekindle
        the emotional connection with your partner, so you can get talking again
        in a kind and compassionate way.
      </p>

      <Link href='/userName' passHref>
        <button>Create your own Olive Branch</button>
      </Link>
    </div>
  );
}
