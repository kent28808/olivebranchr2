import Link from "next/link";

const recordingConfirmationscreen = () => {
    return (  
        <div>
        <h1>Great work! Here is a preview of the Olive Branch that you created.</h1>

        <p>preview image of text message, audio recording and photo?</p>
        <br></br>
        <Link href="/screen09"passHref>
        <button>Next</button>
        </Link>
    </div>
    );
}
 
export default recordingConfirmationscreen;