// var ComfyJS = require('comfy.js');
import * as dotenv from 'dotenv';
import * as ComfyJS from 'comfy.js';
dotenv.config();

console.log(process.env.TWITCHUSER);
/* 
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (flags.broadcaster && command === 'test') {
    console.log('!test was typed in chat');
  }
};
ComfyJS.Init('ManniMoki');

const peopleToShoutOut = {
	BenDMyers: {
		alias: 'SomeAnticsDev',
		personalizedMessage: 'Howdy'
	}
};

const hasSentMessage = {};

ComfyJS.onChat = (user, ...otherThings) => {
	if (peopleToShoutOut[user] && !hasSentMessage[user]) {
		const streamer = peopleToShoutOut[user];
		const message = streamer.personalizedMessage || 'Hi';
		const mention `@${streamer.alias || user}`;
		ComfyJS.Say(`${message} ${mention}! Glad you could make it!`);
	}
	
	hasSentMessage[user] = true;
}


      
      ComfyJS.onChat = ( user, message, flags, self, extra ) => {
        if(user === 'FrostyyPaws'){
          console.log( user, `Checkout ${user} @ https://twitch.tv/${user}` );
        }
        if(user === 'BenDMyers'){
          console.log( user, 'https://twitch.tv/SomeAnticsDev' );
        }
        console.log(user, message);
}

      ComfyJS.Init( "ManniMoki", ); */
