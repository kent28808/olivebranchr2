import Link from "next/link";

const oliveHelpscreen = () => {
    return (
        <div>
            <h1>What is your name?</h1>
                <p>Enter your name here</p>
            <Link href="/screen04">
                <button>Next</button>
            </Link>
        </div>
    );
}

export default oliveHelpscreen;