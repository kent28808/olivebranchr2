import Link from "next/link";

const initialHelpscreen = () => {
    return (
        <div>
            <h1>How does Olive Branch work?</h1>
            <p>We know fights between couples can be tough.  The uncomfortable silent hours that follow are even harder.</p>
    
            <p>We are here to help.  We will support you send send an Olive Branch- a set of impactful messages to your partner that would facilitate quicker and effective communication.</p>
            
            <Link href="/screen03">
                <button>Next</button>
            </Link>
        </div>
    );
}

export default initialHelpscreen;