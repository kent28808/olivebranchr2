import Link from "next/link";

const partnerNamescreen = () => {
    return (  
        <div>
            <h1>Nice to meet your Cody.</h1>
            <h1>Who are you reaching out to?</h1>
            <br></br>
            <p>Enter name here.</p>
            <Link href="/screen12">
            <button>Next</button>
            </Link>
        </div>
    );
}
 
export default partnerNamescreen;