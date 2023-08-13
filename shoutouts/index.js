const { lgbtqiaStreamers } = require('./lgbtqiaStreamers');
const { techStreamers } = require('./techStreamers');
const { theClaw } = require('./theClaw');
// TODO: use JWalters auto json list to keep claw members up to date https://jwalter-teamschedule.builtwithdark.com/members

const shoutoutList = {
  ...lgbtqiaStreamers,
  ...theClaw,
  ...techStreamers,
  // shoutout user names need to be all lowercase
  rayynetv: {
    personalizedMessage: `The most bombarassclatpussybombabloodclat person I know, sometimes he even streams!`,
  },
  thethreshhold: {
    personalizedMessage:
      'One of the best League of Legends support mains I know, sometimes he even streams it on Twitch!',
  },
  tg_khalil: {},
};

module.exports = shoutoutList;
