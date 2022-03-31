import Link from "next/link";

const finalPhonescreen = () => {
    return (  
        <div>
            <h1>One last thing, what's Jen's phone number?</h1>
            <Link href="/screen15">
            <button>Next</button>
            </Link>
        </div>
    );
}
 
export default finalPhonescreen;