const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '?r') {
    msg.reply('rueda giiiiiiiiiil');
  }
});

client.login('ODM4NjE4MDI3Nzg0MDExNzg2.YI9t5g.R4s2sC5Wed_x6QsxF_JLXLLXiCQ');