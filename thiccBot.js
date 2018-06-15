//Calling the package
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

//JSON files
let thiccData = JSON.parse(fs.readFileSync('thiccData.json', 'utf8'));

//Listener event: Message Recieved
bot.on('message', message => {

  //Variables
  let sender = message.author;
  let msg = message.content.toUpperCase();
  let prefix = '>'

  if (bot.user.id === message.author.id) { return }

  //Events
  let userData = JSON.parse(fs.readFileSync('thiccData.json', 'utf8'));
  if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
  if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].thicc = 1000;
  if (!userData[sender.id + message.guild.id].username) userData[sender.id + message.guild.id].username = message.author;

  fs.writeFile('thiccData.json', JSON.stringify(thiccData), (err) => {
    if (err) console.error(err);
  })

  //Commands

  ///Money
  if (msg === prefix + 'THICC LIST') {
    message.channel.send({embed:{
      title:"Bank",
      color:0xF1C40F,
      fields:[{
        name:"Person",
        value:message.author.username,
        inline:true
      },
      {
        name:"Balance",
        value:userData[sender.id + message.guild.id].money,
        inline:true
      }]
    }})
  }


})

//Runs when the bot turns on
bot.on('ready', () => {
  console.log('Thiccer than a bowl of pudding')
})

//Login
bot.login(process.env.BOT_TOKEN)
