import Link from "next/link";

const textMsgscreen = () => {
    return (  
        <div>
            <h1>Great work! Here is a preview of the Olive Branch that you created.</h1>
            <Link href="/screen12">
                <a>next</a>
            </Link>
        </div>
    );
}
 
export default textMsgscreen;