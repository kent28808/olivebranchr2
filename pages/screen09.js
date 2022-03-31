import Link from "next/link";

const phoneScreen = () => {
    return (  
        <div>
            <h1>One last thing, what's Jen's mobile number?</h1>
            <p>So we can send the Olive Branch for you.</p>
            <br></br>
            <p>Enter mobile number here</p>
            <Link href="/screen10">
            <button>Next</button>
            </Link>
        </div>
    );
}
 
export default phoneScreen;