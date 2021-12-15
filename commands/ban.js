module.exports = {
    name: "ban",
    description: "Ban user command.",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(memeber.id);
            memberTarget.ban();
            message.channel.send("User has been banned.");
        }else{
            messsage.channel.send('You couldn`t ban that member.');
        }
    }
}