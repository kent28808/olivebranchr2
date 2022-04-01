import Link from "next/link";

const commitmentScreen = () => {
    return (  
       <div>
            <h1>Next, let's make sure your partner can see you.</h1>
            <br></br>
            <p>Pick a moment from your photos to remind both of you the happy days.</p>
            <Link href="/screen07"passHref>
            <button>Next</button>
            </Link>
        </div>
    );
}
 
export default commitmentScreen;