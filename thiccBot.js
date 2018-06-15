var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'
  const rando_imgs = [
    'https://cdn.discordapp.com/attachments/355311258800750593/442154717158834176/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437283422545903636/part0.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437324616407711754/IMG_20180421_095023352.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437761879624908800/IMG_20180418_071655809.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437767273000730624/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437776530068996116/6385c634-406c-40e7-be87-a2fe9b36521b.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/437790144683180034/Screenshot_20180422-214133.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/437780618072424458/Screenshot_20180422-210342.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/437790750638604308/image.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/437790957379780628/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437791067371208705/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437791544926535681/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/437792879755132938/image.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438062420544454656/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438062633363439617/image.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438062714187808771/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438062731120214036/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438077339390443521/tyson_2.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438103966421614592/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438104719232204800/IMG_20180423_095319393.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438105108606353431/IMG_20180423_092724463.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438105155020521482/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438105557392424961/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438106189553729536/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438157230303608863/JPEG_20180418_202031.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438158146217967626/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438203859874217994/91520743-2b20-438a-aea4-248df545c7e0.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438404384691585035/IMG_20180424_093119044.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438510332810625035/aae99caa-9319-4bab-8f61-3872ab56fb7b.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438536962949775360/88429606-042b-4e07-862d-85cc19550ff1.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438730175987974146/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438827857758781450/IMG_20180425_132512246.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438880269517324288/141bf77f-7477-4aaa-a6ea-34943e59c445.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438880470051192872/Tn58qhq0RSyGMdjIihODWQ.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/438880748775145482/hayd.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438880996151001098/WIN_20171119_23_40_36_Pro.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/438881507797630987/oPAQRAeO_400x400.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/439277409590837248/IMG_20180426_094843802.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/439277153998209024/IMG_20180426_090459465.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/439285318529581066/explode-5.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/439921997884030997/image.jpg',
    'https://cdn.discordapp.com/attachments/420787129833095169/439936743811317770/image.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/440254908802007042/magik-6.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/440593821118758942/Screen_Shot_2018-04-30_at_8.59.43_AM.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/440597143762239498/female-11.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/440597367411179521/unknown.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/440597442572976158/female-1.png',
    'https://cdn.discordapp.com/attachments/420787129833095169/440662247598063617/Photo_on_12-19-17_at_7.22_PM.jpg',
    'https://cdn.discordapp.com/attachments/355308930429353986/452103309709541416/JPEG_20180601_093550.jpg',
    'https://cdn.discordapp.com/attachments/355308930429353986/455666887804846080/Screen_Shot_2018-06-11_at_5.40.00_AM.png',
  ]


  if (msg === prefix + 'COMMANDS') {
    var list_quotes = `
    Note: For most names, you can get away with only typing the first or last name.
    >Jackson Swearhart
    >Matt Roe
    >Matt Combs
    >Andy Campos
    >Rogelio Estrada
    >Chiraag Chakravarthy
    >David Milne
    >Chris Tangi
    >Jason Peiffer
    >Sam Trifaro
    >Jimmy Nguyen
    >Justin Nguyen
    >Kelly Nguyen
    >Hayden Rilee
    >Jon Cruz
    >Nick Bongiorno
    >Donna Luzenski
    >Paul Hurley
    >Ethan Reiland
    >Ethan Chandler
    `;
    message.channel.send({embed:{
      title:"Commands and stuff",
      color:0xF1C40F,
      fields:[{
        name:'>commands',
        value:'Tells you commands, if you couldn\'t tell that just by looking at it, you need help.',
        inline:false
      },
      {
        name:'>lore',
        value:'Gives you a piece of DASD lore.',
        inline:false
      },
      {
        name:'Quote Commands',
        value: (list_quotes),
        inline:false
      },
      {
        name:'>image',
        value:'Gives you a random image.',
        inline:false
      }]
    }})
  }

  //JACKSON SWEARHART
  const swearhart_quotes = [
    '"***ITS SEVEN THRITY FIVE***" - Jackson Swearhart',
    '"Is this a *touchscreen?!*" - Jackson Swearhart',
    '"Its called Palmoplantar hyperhidrosis, its just sweaty hand disorder" - Jackson Swearhart',
    '"Hmmm, the stupidest thing someone has done this year was definitely Jackson drinking Kool-Aid out of an unsterilized syringe" - Mrs. McCormick talking about Jackson'
  ]
  if (msg ===  prefix + 'JACKSON SWEARHART') {
    message.channel.send(swearhart_quotes[Math.floor(Math.random() * swearhart_quotes.length)]);
  }

  //MATT ROE
  const roe_quotes = [
    '"Hey could you give me [insert girl]\'s discord? I just want to talk to her" - Matt Roe',
    '"Hows it going Mr. Roach" - Matt Roe',
    '"Yo, fistbump?" *person looks at him in disgust* "Oh ok then. . ." - Matt Roe'
  ]
  if (msg === prefix + 'MATT ROE') {
    message.channel.send(roe_quotes[Math.floor(Math.random() * roe_quotes.length)]);
  }

  //MATTHEW COMBS
  const combs_quotes = [
    '"*Actually. . ." - Matt Combs',
    '"I **didn\'t** break the printers!" - Matt Combs',
    '*punches someone and stabs them with his nail* "I. . . **didn\'t. . .** ***TOUCH YOU!!!***" - Matt Combs',
    '*silence* "heh, Ivy Chang. . ." - Matt Combs '
  ]
  if (msg === prefix + 'MATT COMBS') {
    message.channel.send(combs_quotes[Math.floor(Math.random() * combs_quotes.length)]);
  }

  //WHICH MATT?
  if (msg === prefix + 'MATT') {
    message.channel.send('Which one? **ROE** or **COMBS**? They\'re equally autistic. . .')
  }

  //ANDREW CAMPOS
  const andy_quotes = [
    '"Ms. Read is fuckin hot bro!" - Andrew Campos',
    '"Your countrys GDP is lower than the average somolian familys income" - Ethan talking to Andrew Campos',
    '"Yo albino nigger yo" - Andy talking to Ethan',
    '"I hate asian people" - Andrew Campos',
    '"I ain\'t gay, but I wouldn\'t mind sliding into Jake Lackey\'s tight little boy hole" - Andrew Campos',
    '"do we do do" - Andrew Campos',
    '"Jake Lackey\'s ass kinda tight yo ngl" - Andrew Campos',
    '"Hayden is like, one of the hottest guys I know, I would date him" - Andrew Campos',
    'I fucked a non-consenting 16 year old!',
    '"***I WANT TO FUCK LIZARDS***" - Andrew Campos',
    '"I dunno man" - Andrew Campos',
    '"Did you know that tree frogs. . ." - Andrew Campos',
    '"Niggasaurus Rex" - Andrew Campos',
    '"Yo what the fuck yo, like you" - Andrew Campos',
    '"Nah man I\'m pretty sure its a [insert latin name for reptile]! You can tell by the [insert color or shape] right next to its [insert body part]" - Andrew Campos',
    '"Traps are kinda hot man" - Andrew Campos',
    '"I wanna fuck Eren in the ass, not because I\'m gay, just \'cause I wanna show him whos boss" - Andrew Campos',
    '*disappears to Costa Rica for three months*',
    '"Yo I\'ll stab myself with this wasp for a quarter, or like a sip of someone\'s drink, guys come on I\'m thirsty" - Andrew Campos',
    '"Mason did take my packet?! Give it back yo! Wait where did my phone go? Is that in the trash too?! Brain what the fuck bro" - Andrew Campos',
    '"Yo I want some bro-love, bro" - Andrew Campos',
    '"Yo Hayden you got some good lookin fingers, you\'re gonna make someone real happy one day" - Andrew Campos'
  ]
  if (msg === prefix + 'ANDY CAMPOS' || msg === prefix + 'ANDY' || msg === prefix + 'CAMPOS') {
    message.channel.send(andy_quotes[Math.floor(Math.random() * andy_quotes.length)]);
  }

  //ROGELIO ESTRADA
  const rogelio_quotes = [
    '"*shut up*" - Rogelio Estrada',
    'staring at freshman* "Damn look at her ass, she got a nice ass" - Rogelio Estrada',
    '"*speaks in tortilla*" - Rogelio Estrada',
    '"Yea bitch I\'m a nigger" - Rogelio Estrada',
    '*awkward laugh*" - Rogelio Estrada"',
    '""Shut up or I\'ll kiss you" - Rogelio Estrada"',
    '"Damn you looking cute today" *grabs your hand* - Rogelio Estrada',
    '"Ay niggermonkey, get down here!" - Rogelio Estrada to Andy Campos'
  ]
  if (msg === prefix + 'ROGELIO ESTRADA' || msg === prefix + 'ROGELIO') {
    message.channel.send(rogelio_quotes[Math.floor(Math.random() * rogelio_quotes.length)]);
  }

  //CHIRAAG CHAKRAVARTHY
  const chiraag_quotes = [
    '"try this one. I recompiled it on my mac" - Chiraag Chakravarthy',
    '"bed wedder anime" - Chiraag Chakravarthy',
    '"Boi zoes gonna fite u and desteiy your router. . . AFTER I DDOS IT\'S ASS" - Chiraag Chakravarthy',
    '"I\'mma ddos ur ass fool" - Chiraag Chakravarthy',
    '"MASS AMPLIFIED DENIAL OF SERVICE" - Chiraag Chakravarthy',
    '"I\'ll hack your computer" - Chiraag Chakravarthy'
  ]
  if (msg === prefix + 'CHIRAAG CHAKRAVARTHY' || msg === prefix + 'COOL C' || msg === prefix + 'CHIRAAG') {
    message.channel.send(chiraag_quotes[Math.floor(Math.random() * chiraag_quotes.length)]);
  }

  //DAVID MILNE
  const milne_quotes = [
    '"Thats **sir** Milne to you, maggot!" - David Milne',
    '"Shut the fuck up you unloved fat fuck" - David Milne yelling at Josh Best',
    '"Story time fuckers, so when my dad was in the marines. . ." - David Milne',
    '"I told you before, *I am* ***not*** *a school shooter*" - David Milne',
    '"haha, fuckin\' sped" - David Milne',
    '"I\'m in sped classes, I\'m a sped, I\'m allowed to call people a sped, you sped" - David Milne'
  ]
  if (msg === prefix + 'DAVID MILNE' || msg === prefix + 'MILNE') {
    message.channel.send(milne_quotes[Math.floor(Math.random() * milne_quotes.length)]);
  }

  //CHRIS TANGI
  const tangi_quotes = [
    '"Ay I\'m Chris Tangi, I\'m lookin like a snacc" - Ryan Doloughty impersonating Chris Tangi',
    '"Stop taking my pencil case Ryan!" - Chris Tangi'
  ]
  if (msg === prefix + 'CHRIS TANGI') {
    message.channel.send(tangi_quotes[Math.floor(Math.random() * tangi_quotes.length)]);
  }

  //JASON PEIFFER
  const peiffer_quotes = [
    '"I swear its not a thot this time, not all freshman are thots" - Jason Peiffer',
    '"Guys look at this!" *spams gore and trap porn* - Jason Peiffer'
  ]
  if (msg === prefix + 'JASON PEIFFER' || msg === prefix + 'PEIFFER') {
    message.channel.send(peiffer_quotes[Math.floor(Math.random() * peiffer_quotes.length)]);
  }

  //SAM TRIFARO
  const trifaro_quotes = [
    '"Traps aren\'t gay" - Sam Trifaro',
    '"The dick just makes it cuter" - Sam Trifaro',
    '"Ok, if you don\'t know it has a dick, and you like it, its not gay" - Sam Trifaro'
  ]
  if (msg === prefix + 'SAM TRIFARO') {
    message.channel.send(trifaro_quotes[Math.floor(Math.random() * trifaro_quotes.length)]);
  }

  //JIMMY NGUYEN
  const jimmynguyen_quotes = [
    '*"Hows that asshole feeling Jimmy?"* "It was an upper endoscopy, not a colonoscopy" - Jimmy Nguyen'
  ]
  if (msg === prefix + 'JIMMY NGUYEN') {
    message.channel.send(jimmynguyen_quotes[Math.floor(Math.random() * jimmynguyen_quotes.length)]);
  }

  //JUSTIN NGUYEN
  const justinnguyen_quotes = [
    '"Oh yeah? Well I bet you live in a two story house. . ." - Justin Nguyen',
    '"Yo Andy is that a *knife*?" - Justin Nguyen',
    '"*speaks in agent orange*" - Justin Nguyen'
  ]
  if (msg === prefix + 'JUSTIN NGUYEN') {
    message.channel.send(justinnguyen_quotes[Math.floor(Math.random() * justinnguyen_quotes.length)]);
  }

  //KELLY NGUYEN
  const kellynguyen_quotes = [
    '"huh?" - Kelly Nguyen'
  ]
  if (msg === prefix + 'KELLY NGUYEN') {
    message.channel.send(kellynguyen_quotes[Math.floor(Math.random() * kellynguyen_quotes.length)]);
  }

  //WHICH NGUYEN
  if (msg === prefix + 'NGUYEN') {
    message.channel.send('All right cunt, which one? Theres like 40 of \'em')
  }

  //HAYDEN RILEE
  const rilee_quotes = [
    '"Despacito is **EPIC**" - Hayden Rilee',
    '"[insert random russian]" - Hayden Rilee',
    '"Guys, guys look!" *wiggles thumb* "I\'m evolved" - Hayden Rilee',
    '"What?! I don\'t know where you heard that, I never told *any* you guys that, I have *never* said my nose is asian" - Hayden Rilee',
    '"Rogelio Estrada is a **FREAK**" - Hayden Rilee'
  ]
  if (msg === prefix + 'HAYDEN RILEE' || msg === prefix + 'HAYDEN') {
    message.channel.send(rilee_quotes[Math.floor(Math.random() * rilee_quotes.length)]);
  }

  //JON CRUZ
  const cruz_quotes = [
    '"Good morning Downingtown, I\'m your host, Jon Cruz!" - Jon Cruz',
    '"Could I get a picture? Please? It\'s my birthday" - Jon Cruz'
  ]
  if (msg === prefix + 'JON CRUZ') {
    message.channel.send(cruz_quotes[Math.floor(Math.random() * cruz_quotes.length)]);
  }

  //NICK BONGIORNO
  const bongiorno_quotes = [
    '"And I\'m Nick Booooooooooooooooooooooooongiorno" - Nick Bongiorno',
    '"This is my turf, so why don\'t you back off. . . Bud" - Nick Bongiorno'
  ]
  if (msg === prefix + 'NICK BONGIORNO' || msg === prefix + 'BONGIORNO') {
    message.channel.send(bongiorno_quotes[Math.floor(Math.random() * bongiorno_quotes.length)]);
  }

  //DONNA LUZENSKI
  const luzenski_quotes = [
    '"Do you have an IEP?" - Ms. Luzenski to Chris McHenry',
    '*rants about the difference between "famous" and "infamous"* "The nazis were famous for their cruelty" - Ms. Luzenski',
    '"***SEVENTY FIVE DRACHMAS!!!***" - Ms. Luzenski',
    '"Do you want to get slapped?!" - Ms. Luzenski to Alison Waller'
  ]
  if (msg === prefix + 'DONNA LUZENSKI' || msg === prefix + 'LUZENSKI') {
    message.channel.send(luzenski_quotes[Math.floor(Math.random() * luzenski_quotes.length)]);
  }

  //PAUL HURLEY
  const hurley_quotes = [
    '*walks around corner* "Did you say that? Lets have a quick chat in my office" - Paul Hurley',
    '"Good morning students and staff, we will be going into a modified lock down drill. . ." - Paul Hurley',
    '"I am *very* disappointed in your recent behaviour, we expect better from you" - Paul Hurley to Ethan Reiland'
  ]
  if (msg === prefix + 'PAUL HURLEY' || msg === prefix + 'HURLEY') {
    message.channel.send(hurley_quotes[Math.floor(Math.random() * hurley_quotes.length)]);
  }

  //ETHAN REILAND
  const reiland_quotes = [
    '"I ain\'t gay, but I\'d fuck the hell outta that tight little thot Katie Skelton" - Ethan Reiland',
    '"Wanna buy a washing machine?" - Ethan Reiland'
  ]
  if (msg === prefix + 'ETHAN REILAND') {
    message.channel.send(reiland_quotes[Math.floor(Math.random() * reiland_quotes.length)]);
  }

  //ETHAN CHANDLER
  const etone_quotes = [
    '"I love you bwudda" - Ethan Chandler'
  ]
  if (msg === prefix + 'ETHAN CHANDLER' || msg === prefix + 'ETONE') {
    message.channel.send(etone_quotes[Math.floor(Math.random() * etone_quotes.length)]);
  }

  //WHICH ETHAN
  if (msg === prefix + 'ETHAN') {
    message.channel.send('Which one? **REILAND** or **CHANDLER**?')
  }

  //LORE OF THE SERVER
  const lore = [
    '*Peter refuses to cut his hair*',
    '*Rogelio jacked off right next to his unmuted mic*',
    '*Chiraag peed under his desk in first grade*',
    '*Tyson started a civil war by stealing people\'s stuff in minecraft*',
    '*David Milne is into beastiality*',
    '*Ethan Reiland has been suspended twice for making fun of smink*',
    'https://www.youtube.com/watch?v=XERMH_xlaUs',
    'https://www.youtube.com/watch?v=2F8IU7RPP3g&list=LLNA-kQ4Xm6lGB8xHYn_u46A&index=197',
    'https://www.youtube.com/watch?v=YFOBd-UcbaQ',
    'https://www.youtube.com/watch?v=XERMH_xlaUs',
    'https://www.youtube.com/watch?v=QSDNvWlhFws',
    'https://www.youtube.com/watch?v=6Cqc7Lw_Fzk',
    'https://www.youtube.com/watch?v=FoVZjYiODLQ',
    'https://www.youtube.com/watch?v=Et_2ZBO27i8',
    'https://www.youtube.com/watch?v=o84ASZ8bEHw',
    'https://www.youtube.com/watch?v=BiyxOD4UDk8'
  ]
  if (msg === prefix + 'LORE') {
    message.channel.send(lore[Math.floor(Math.random() * lore.length)]);
  }

//----------------------------------------------------------------------------------------------------------------\\

  //DESPACITO
  if (msg.includes("DESPACITO")) {
    message.channel.send('DES')
    message.channel.send('PAC')
    message.channel.send('ITO')
  }

  //RANDOM IMAGE
  if (msg === prefix + 'IMAGE') {
    message.channel.send({file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]});
  }

});

bot.on('ready', () => {
  console.log('Race war now!')
  bot.user.setStatus('Online')
  bot.user.setActivity('Use >commands')
})

//bot login token : Prime Goon
//https://discordapp.com/oauth2/authorize?client_id=450838438829228043&scope=bot&permissions=2146958591
//bot.login('NDUwODM4NDM4ODI5MjI4MDQz.De5l9g.zX4tWMtIjtGG-vLlM5aQ1n-7HG8')

bot.login(process.env.BOT_TOKEN)

//bot login token : Beta Goon
//https://discordapp.com/oauth2/authorize?client_id=450861691643887617&scope=bot&permissions=3072
//bot.login('NDUwODYxNjkxNjQzODg3NjE3.De5ZMQ.alM8agGMdHouODof8VF3c5S2RUw')
