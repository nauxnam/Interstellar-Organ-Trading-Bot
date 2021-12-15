// id: 920345356615688222
// invitation-link: https://discord.com/api/oauth2/authorize?client_id=920345356615688222&scope=bot&permissions=1

const Discord = require('discord.js');

const client = new Discord.Client();

const {
    token
} = require("./token.json");

const prefix = 'o!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Interstellar Organ Trading Bot is online.')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }   else if (command === 'tradecenter'){
            client.commands.get('tradecenter').execute(message, args);
    }   else if (command === 'trader'){
            client.commands.get('trader').execute(message, args);
    }   else if (command === 'help'){
            client.commands.get('help').execute(message, args, Discord);
    //}   else if (command === 'pump'){
    //        client.commands.get('pump').execute(message, args, Discord);
    //}   else if (command === 'dump'){
    //        client.commands.get('dump').execute(message, args, Discord);
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
});



client.login(token);