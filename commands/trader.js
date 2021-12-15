module.exports = {
    name: 'trader',
    description: 'Become a Licenced Organ Trader',
    execute(message, args){

        let role = (message.guild.roles.cache.find(r => r.name === "Trader"));
        if(message.member.roles.cache.some(r => r.name === "Trader")){
            message.channel.send('You`re already a Trader.');
        } else {
            message.channel.send('You`re now a licenced Organ Trader.');
            message.member.roles.add(role).catch(console.error);
        }
    }


}