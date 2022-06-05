import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ButtonWithText from "../components/ButtonWithText";
import oliveBranch from "../public/index/ob-image.png";
import oliveBranch2x from "../public/index/ob-image@2x.png";
import oliveBranch3x from "../public/index/ob-image@3x.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olive Branch</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='container'>
        <h1 className='title'>Olive Branch</h1>
        <Image
          src={oliveBranch}
          srcSet={`${oliveBranch2x} 2x, ${oliveBranch3x} 3x`}
          alt='olive branch logo'
        />
        <br />
        <br />
        <ButtonWithText
          innerRef='/intro'
          text='Mending hearts with your partner'
        />
        <br />
        <Link href='/about' passHref>
          <div>
            <p className='body'>About the creators</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
