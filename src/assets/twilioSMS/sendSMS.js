// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACf9ddf57e62b21165a1d3dd92c8b1089d';
const authToken = '3f77bd2ebd3af7d6ff28f5d2b492b134';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17014015043',
     to: '+6597892453'
   })
  .then(message => console.log(message.sid));
