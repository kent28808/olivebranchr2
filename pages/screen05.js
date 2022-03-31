import Link from "next/link";
import React from 'react';
import MicRecorder from 'mic-recorder-to-mp3'; // https://www.npmjs.com/package/mic-recorder-to-mp3

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isRecording: false,
        blobURL: '',
        isBlocked: false,
      };
    }
//   Start recording
    start = () => {
      if (this.state.isBlocked) {
        console.log('Permission Denied');
      } else {
        Mp3Recorder
          .start()
          .then(() => {
            this.setState({ isRecording: true });
          }).catch((e) => console.error(e));
      }
    };
//   Stop recording
    stop = () => {
      Mp3Recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          const blobURL = URL.createObjectURL(blob)  //blob is the captured mp3 audio
          this.setState({ blobURL, isRecording: false });
        }).catch((e) => console.log(e));
    };
//   Using a promise based getUserMedia() https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    componentDidMount() {
      navigator.getUserMedia({ audio: true }, // Asking web browser for microphone permission
        () => {
          console.log('Accepted');
          this.setState({ isBlocked: false });
        },
        () => {
          console.log('Rejected');
          this.setState({ isBlocked: true })
        },
      );
    }
//   Display buttons and playback controls
    render(){
      return (
        <div className="App">
            <h1>First, let's make sure Jen can HEAR your commitment.</h1>
            <p>Record below Commitment Declaration as a voice message for Jen.</p>
            <br></br>
            <p> Hey Jen,</p>
            <p>I want you to know that you are very important to me.  I am committed to this relationship and I promise that we will this out together.</p>
          <header className="App-header">
            <button onClick={this.start} disabled={this.state.isRecording}>Record</button>
            <button onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>
            <audio src={this.state.blobURL} controls="controls" />
          </header>
          <Link href="/screen06">
          <button>Next</button>
        </Link>
        </div>
        
      );
    }
  }
  
  export default App;

//   Marissa screen 05
// import { useContext } from "react";
// import { MessageContext } from "../context/MessageContext";

// const name2screen = () => {
//   const value = useContext(MessageContext);
//   console.log(value);
//   return (
//     <div>
//       <h1>Who are you reaching out to?</h1>
//       <p>Enter your partners name {value.recipient}</p>
//       <Link href='/screen06'>
//         <a>next</a>
//       </Link>
//     </div>
//   );
// };

// export default name2screen;
