const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sampleNumber = process.env.TWILIO_SAMPLE_TO_NUMBER;
const twilioAccountNumber = process.env.TWILIO_ACCOUNT_NUMBER;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);


export default function handler(req, res) {
    res
client.messages
  .create({
     body: 'Audio Testing',
     from: twilioAccountNumber,
     mediaUrl: ['https://tusd.tusdemo.net/files/15cbfcd220eb4413c9ec8920ec286479+kTZrM.n_jhHVs6.XNXaU.9D6ZY.VKwkErYe9rkl1Rvt7jlUEe62VbGOoCNJSr_uhV.zxf2a1oRxmvsE5RzngEBYkHIGqQV66EpZU3FgJskmm.68qrp7onRJgT1kUHIO9'],
     to: sampleNumber
   })
  .then(message => console.log(message.sid));
}