const Discord = require('discord.js');
const auth = require('./auth');
const path = require('path');

const bot = new Discord.Client();

bot.on('message', async (msg) => {
  // then this is just a normal message, don't do anything
  if (!msg.content.startsWith('!mitch')) {
    return;
  }

  if (!msg.member.voiceChannel) {
    return;
  }

  // take out exclamation mark
  const cmd = msg.content.substring(7);


  const { voiceChannel } = msg.member;
  const conn = await voiceChannel.join();
  const pathName = path.join(__dirname, `cash/${cmd}.mp3`);

  const dispatcher = conn.playFile(pathName);

  dispatcher.on('end', () => {
    voiceChannel.leave();
  });
});

bot.login(auth.token);
