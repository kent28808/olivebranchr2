import Link from "next/link";

const nameScreen = () => {
    return (
        <div>
        <h1>What's your name?</h1>
        <br></br>
        <p>Enter name here</p>
        <Link href="/screen11">
        <button>Next</button>
        </Link>
    </div>
    );
}

export default nameScreen;