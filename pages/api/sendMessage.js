const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sampleNumber = process.env.TWILIO_SAMPLE_TO_NUMBER;
const twilioAccountNumber = process.env.TWILIO_ACCOUNT_NUMBER;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

console.log(twilio)
// console.log(accountSid, authToken)

export default function handler(req, res) {
  console.log("Request: ", req.body);
  res
    .status(200)
    .json({ message: "Placeholder til we get the rest of the app working" });

  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");

  // client.messages
  //   .create({
  //     body: `Hey ${req.body.recipientName}, you just recieved an Olive Branch from ${req.body.senderName}, who wants to reconnect with you. Tap the voice message below to listen! Go to https://www.twilio.com/`,
  //     to: `+1${req.body.recipientNumber}`, // Text this number
  //     from: twilioAccountNumber, // From a valid Twilio number
  //     mediaUrl: [`https://dl.espressif.com/dl/audio/gs-16b-2c-44100hz.mp4`],
  //   })
  //   .then((message) => console.log("This is message.sid:", message.sid));

  // client.messages
  //   .create({
  //     body: `Hey ${req.body.recipientName}, you just recieved an Olive Branch from ${req.body.senderName}, who wants to reconnect with you. Tap the voice message below to listen! Go to https://www.twilio.com/`,
  //     to: `+1${req.body.recipientNumber}`, // Text this number
  //     from: twilioAccountNumber, // From a valid Twilio number
  //     mediaUrl: [
  //       `https://tusd.tusdemo.net/files/c11895358200c0371bddd495a8a5a262+fV7Yyf.bHl2PZucuf6ZkTLNeFj8dKVE53jXPFHthwcptEBSrur1kehtZLjhQJfnVEq_ZfyVAL4xUCMERVrGmmf1qM.0LFTd7Bzyb.p1_Mxr4GTl_5k5XD3dCLHjuDvrl`,
  //     ],
  //   })
  //   .then((message) => console.log("This is message.sid:", message.sid));
}
