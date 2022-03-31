import Link from "next/link";

const phoneScreen = () => {
    return (
        <div>
            <h1>First, let's make sure Jen can HEAR your commitment.</h1>
            <Link href="/screen13">
            <button>Next</button>
            </Link>
        </div>
    );
}

export default phoneScreen;