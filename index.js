const Discord = require('discord.js');              
const client = new Discord.Client();                
const config = require('./config.json')             //Configuracion para iniciar bot (TOKEN)
const prefix = config.PREFIX;                       //Declara que la Variable prefix esta en el archivo (config) y ocn el comando PREFIX
client.on('message', async message => {             //Registra los mensajes en busca de un comando valido
  var argu = message.content.slice(prefix.length).split(/ +/g); //Variable ("argu"= argumento) (message.content.slice(prefix.length)= borra el prefijo para detectar el comando) ((/ +/g)= borra los espacios inecesarios del mensaje)
  var command = argu.shift().toLocaleLowerCase();   //Variable Command (argu.shift)= detecta el prefijo (toLocaleLowerCase)= cambia todas las letra a minusculas
  if (command == "say") {                           
  if (!argu[0]) return message.channel.send("ingesa un un mensaje para enviar *-rsay <mensaje>*") //Salida para cuando el mensaje no es valido
  message.channel.send(argu.join(" ")); // Pone todas las palabras una alado de la otra y no una debajo de otra
};
});

client.login(config.TOKEN);
