var ComfyJS = require('comfy.js');
const dotenv = require('dotenv');
dotenv.config();

const TWITCH_OAUTH = process.env.OAUTH;
const TWITCH_USER = process.env.TWITCHUSER;

const featureFlag = {
  autoshoutout: true,
};

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (flags.broadcaster && command === 'test') {
    console.log('!test was typed in chat!');
  }
};

const peopleToShoutOut = {
  // shoutout user names need to be all lowercase
  bendmyers: {
    alias: 'SomeAnticsDev',
    personalizedMessage:
      'Checkout Ben, an awesome twitch streamer and accessibility advocate!',
  },

  frostyypaws: {},
  soapyworks: {},
  queerjay: {},
  mixedmechanics: {},
  finchcharming: {
    personalizedMessage: 'Check out this cutiee UwU',
  },
};

const hasSentMessage = {};

if (featureFlag.autoshoutout) {
  ComfyJS.onChat = (user, command, message, ...otherThings) => {
    const userAccessor = user.toLowerCase();

    if (peopleToShoutOut[userAccessor] && !hasSentMessage[userAccessor]) {
      const streamer = peopleToShoutOut[userAccessor];
      const mention = `@${streamer.alias || user}`;
      const channel = peopleToShoutOut[userAccessor].alias || user;

      const defaultShoutout = `Checkout my goodjudy ${mention}! https://twitch.tv/${channel} manniLove`;

      const message = streamer.personalizedMessage
        ? `${streamer.personalizedMessage} https://twitch.tv/${channel} manniLove`
        : defaultShoutout;

      ComfyJS.Say(message);
    }

    hasSentMessage[userAccessor] = true; // ensures it only shouts out once per bot start
  };
}

ComfyJS.Init(TWITCH_USER, TWITCH_OAUTH);
