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

const theClaw = {
  whitep4nth3r: {
    personalizedMessage:
      'The queen of The Claw has arrived! https://theclaw.team',
  },
  matty_twoshoes: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  metalandcoffee_: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  ladyofcode: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  gacbl: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  finitesingularity: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  tdrayson: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  thatn00b__: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  theempressaria: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  ukmadlz: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  toefrog: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
  jwalter: {
    personalizedMessage:
      'A fellow member of The Claw has arrived! https://theclaw.team',
  },
};

const designersAndDevelopers = {
  mewtru: {
    personalizedMessage: 'MOMMI TRU IS HERE! hypeE',
  },
  vapejuicejordan: {
    personalizedMessage: `A mega troll and highly skilled POGrammer`,
  },
  trash_dev: {},
  theidofalan: {},
  maxcellw: {},
  ninopepper: {},
  afatchocobo7: {},
  guidouneee: {},

  trostcodes: {
    personalizedMessage: `Theee host of Frontend Horse: https://frontend.horse featuring creative developers and demistifyign the front-end!`,
  },
  erindesong: {
    personalizedMessage: `The Tertris queen Erin is here!`,
  },

  adhddesigner: {
    personalizedMessage: 'My co-working queen Shannon is here!',
  },
  sekeidesign: {
    personalizedMessage: `The UI to my UX is here! An amazing designer and developer who also has a really cute cat named Opal! They inspired me to stream long ago and have since become one of my goodest judy's here on Twitch!`,
  },
  aaoa_: {
    personalizedMessage: 'A figma master is here',
  },
  finchcharming: {
    personalizedMessage:
      'One of the most UwU cuties I know, sometimes he even streams!',
  },
  bendmyers: {
    alias: 'SomeAnticsDev',
    personalizedMessage:
      'An awesome software/dev streamer and amazing accessibility advocate!',
  },
  frostyypaws: {},
  snowxcone: {},
  juiceboxhero: {},
  typefasterjoel: {},
  cmgriffing: {},
  shark0chie: {},
};

const lgbtqiaStreamers = {
  queerjay: {},
  '592fuse': {},
  addmlr: {
    personalizedMessage: `An IRL judy, host of The Weakest Twink, and my favorite dunce <3 https://clips.twitch.tv/PlainBlithePelicanRitzMitz-8FzHK_ufveh6niuw`,
  },
  soapyworks: {
    personalizedMessage:
      'One of the most UwU cuties I know, sometimes he even streams!',
  },
  burban: {
    personalizedMessage:
      'My favorite chiptole date and amazing Dead by Daylight variety streamer!',
  },
  kentweebz: {
    personalizedMessage:
      'The weebiest weeb to ever weeb, the highest echelon of weeb nobility!',
  },
  feynris: {},
  andymacster: {},

  mixedmechanics: {
    personalizedMessage:
      'One of the most holesome streamers I know and a very good friend!',
  },

  blobarella: {
    personalizedMessage: 'My favorite scream queen!',
  },
  vantanart: {
    personalizedMessage:
      'An artist, yoga instructor and one hell of a variety streamer!',
  },
  totalbetch: {
    personalizedMessage:
      'An absolute betch, you can count on her to always have a glass of wine in hand!',
  },
};

const shoutoutList = {
  ...lgbtqiaStreamers,
  ...theClaw,
  ...designersAndDevelopers,
  // shoutout user names need to be all lowercase
  rayynetv: {
    personalizedMessage: `The most bombarassclatpussybombabloodclat person I know, sometimes he even streams!`,
  },
  thethreshhold: {
    personalizedMessage:
      'One of the best League of Legends support mains I know, sometimes he even streams it on Twitch!',
  },
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
