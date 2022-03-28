const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sampleNumber = process.env.TWILIO_SAMPLE_TO_NUMBER;
const twilioAccountNumber = process.env.TWILIO_ACCOUNT_NUMBER;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  client.messages
    .create({
      body: "Hello from Node",
      to: sampleNumber, // Text this number
      from: twilioAccountNumber, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}
