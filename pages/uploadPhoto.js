import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { Dashboard } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Header from "../components/Header";
import ButtonUpload from "../components/ButtonUpload";
import { MessageContext } from "../context/MessageContext";
import progressBar3 from "../public/progress/progressbar_step3.png";

export default function Uploadphotoscreen() {
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
        <Image src={progressBar3} alt='progress bar3 logo' />
      </div>
      <Header
        innerRef='/recipientName'
        headerText={`First, make sure ${message.recipientName} sees you.`}
      />
      <br></br>
      <p className='body'>
        Pick a moment from your photos to remind both of you the happy days.
      </p>
      <Dashboard uppy={uppy} />
      <br />
      <ButtonUpload innerRef='/previewPhoto' text='Upload photo' />
      {/* <p className='body'>{`${JSON.stringify(message)}`}</p> */}
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
