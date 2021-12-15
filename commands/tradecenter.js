module.exports = {
    name: 'tradecenter',
    description: 'Sends link to the Interstellar Organ Trading Platform',
    execute(message, args){

        if(message.member.roles.cache.some(r => r.name === "Trader")){
            message.channel.send('http://trading.uyuyom.com/');
            
        } else {
            message.channel.send('You need to have Trader role for this command.');
            message.member.roles.add(role).catch(console.error);
        }
       
    }
}