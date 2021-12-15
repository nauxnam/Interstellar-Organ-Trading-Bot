module.exports = {
    name: "ban",
    description: "Ban user command.",
    execute(message, args){
        if(message.member.permissions.has("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("User has been banned.");
            }else{
                messsage.channel.send('You couldn`t ban that member.');
            }
        } else {
            message.channel.send('You don`t have enough permissions.')
        }
    }
}