import Link from "next/link";

const name2screen = () => {
    return (
        <div>
            <h1>Who are you reaching out to?</h1>
            <p>Enter your partners name</p>
            <Link href="/screen06">
                <a>next</a>
            </Link>
        </div>
    )
}

export default name2screen;