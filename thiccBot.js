//Calling the package
const Discord = require('discord.js');
const bot = new Discord.Client();
//Listener event: Message Recieved
bot.on('message', message => {

  //Variables
  let sender = message.author;
  let msg = message.content.toUpperCase();
  let prefix = '>'

  //Commands

  if (msg === prefix + 'THICC') {
    message.channel.send('Zucc is Thicc')
  }

//Runs when the bot turns on
bot.on('ready', () => {
  console.log('Thiccer than a bowl of pudding')
  bot.user.setStatus('online')
})

//Login
bot.login(process.env.BOT_TOKEN)
