var ComfyJS = require('comfy.js');
// import * as ComfyJS from 'comfy.js';
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (flags.broadcaster && command === 'test') {
    console.log('!test was typed in chat');
  }
};
ComfyJS.Init('ManniMoki');
