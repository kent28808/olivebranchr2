import Link from "next/link";

const nameScreen = () => {
    return (
        <div>
            <h1>What is your name?</h1>
                <p>Enter your name here</p>
            <Link href="/screen05">
                <a>Next</a>
            </Link>
        </div>
    );
}

export default nameScreen;