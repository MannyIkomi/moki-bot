const dotenv = require('dotenv');
var ComfyJS = require('comfy.js');
const shoutoutList = require('./shoutouts');

const express = require('express');
const app = express();
const PORT = 6969;

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/end', (req, res) => {
  // end the bot programaticaly
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Moki bot listening on port ${PORT}`);
});

/* Comfy JS bot chat */
const TWITCH_OAUTH = process.env.OAUTH;
const TWITCH_USER = process.env.TWITCHUSER;

const featureFlag = {
  autoshoutout: true,
};

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (flags.broadcaster && command === 'test') {
    ComfyJS.Say('!test response');
    console.log('!test response');
  }
};

const hasSentMessage = {};

if (featureFlag.autoshoutout) {
  ComfyJS.onChat = (user, command, message, ...otherThings) => {
    const userAccessor = user.toLowerCase();

    if (shoutoutList[userAccessor] && !hasSentMessage[userAccessor]) {
      const streamer = shoutoutList[userAccessor];
      const mention = `@${streamer.alias || user}`;
      const channel = shoutoutList[userAccessor].alias || user;

      const defaultShoutout = `Checkout my goodjudy ${mention}! https://twitch.tv/${channel} manniLove`;

      const message = streamer.personalizedMessage
        ? `${mention} ${streamer.personalizedMessage} https://twitch.tv/${channel} manniLove`
        : defaultShoutout;

      ComfyJS.Say(message);
    }

    hasSentMessage[userAccessor] = true; // ensures it only shouts out once per bot start
  };
}

ComfyJS.Init(TWITCH_USER, TWITCH_OAUTH);
