const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sampleNumber = process.env.TWILIO_SAMPLE_TO_NUMBER;
const twilioAccountNumber = process.env.TWILIO_ACCOUNT_NUMBER;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

export default function handler(req, res) {
  console.log(req.body);
  // res
  //   .status(200)
  //   .json({ message: "Placeholder til we get the rest of the app working" });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  client.messages
    .create({
      body: `Hey ${req.body.recipientName}, you just recieved an Olive Branch from ${req.body.senderName}, who wants to reconnect with you. Tap the voice message below to listen!`,
      to: `+1${req.body.recipientNumber}`, // Text this number
      from: twilioAccountNumber, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}
