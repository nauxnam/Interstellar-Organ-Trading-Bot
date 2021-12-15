module.exports = {
    name: "kick",
    description: "Kick user command.",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(memeber.id);
            memberTarget.kick();
            message.channel.send("User has been kicked.");
        }else{
            message.channel.send('You couldn`t kick that member.');
        }
    }
}