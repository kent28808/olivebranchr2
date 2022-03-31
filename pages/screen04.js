import Link from "next/link";

const nameScreen = () => {
    return (
        <div>
            <h1>Nice to meet you Cody.
                Who are you reaching out to?
            </h1>
            <br></br>
                <p>Enter your name here</p>
            <Link href="/screen05">
                <button>Next</button>
            </Link>
        </div>
    );
}

export default nameScreen;