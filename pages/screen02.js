import Link from "next/link";

const initialHelpscreen = () => {
    return (
        <div>
            <h1>We're here to help.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/screen03">
                <a>Yes</a>
            </Link>
        </div>
    );
}

export default initialHelpscreen;