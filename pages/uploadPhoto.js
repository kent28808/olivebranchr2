import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { Dashboard } from "@uppy/react";
import ButtonWithText from "../components/ButtonWithText";
import arrow from "../public/arrow.png";
import progressBar3 from "../public/progress/progressbar_step3.png";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

export default function uploadPhotoScreen() {
  const { message, setMessageValues } = useContext(MessageContext);
  const uppy = new Uppy().use(Tus, {
    endpoint: "https://tusd.tusdemo.net/files/",
  });

  uppy.on("complete", (result) => {
    let uploadURL = result.successful[0].response.uploadURL;
    setMessageValues("imgURL", uploadURL);
  });

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image
          src={progressBar3}
          className='OB-image'
          alt='progress bar3 logo'
        />
      </div>
      <h2 className='heading'>
        Next, let's make sure your partner can see you.
      </h2>
      <br></br>
      <p className='body'>
        Pick a moment from your photos to remind both of you the happy days.
      </p>
      <Dashboard uppy={uppy} />
      <ButtonWithText
        innerRef='/previewPhoto'
        text='Upload photo'
        img={arrow}
        imgClassName={".Vector-7"}
      />
      <p className='body'>{`${JSON.stringify(message)}`}</p>
      <Link href='/recordMessage' passHref>
        <p className='body'>Skip</p>
      </Link>
    </div>
  );
}

// Uppy Config
// const uppy = new Uppy({
//   id: 'uppy',
//   autoProceed: false,
//   allowMultipleUploadBatches: true,
//   debug: false,
//   restrictions: {
//     maxFileSize: null,
//     minFileSize: null,
//     maxTotalFileSize: null,
//     maxNumberOfFiles: null,
//     minNumberOfFiles: null,
//     allowedFileTypes: null,
//     requiredMetaFields: [],
//   },
//   meta: {},
//   onBeforeFileAdded: (currentFile, files) => currentFile,
//   onBeforeUpload: (files) => {},
//   locale: {},
//   store: new DefaultStore(),
//   logger: justErrorsLogger,
//   infoTimeout: 5000,
// })
