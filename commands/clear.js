module.exports = {
    name: 'clear',
    description: 'Clear specified messages from channel.',
    async execute(message, args) {
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
            if(isNaN(args[0])) return message.reply("Please enter a real number!");

            if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
            if(args[0] < 1) return message.reply("You must delete atleast 1 message!");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        }else {
            message.channel.send('You do not have enough permissions to delete messages.')
        }
    }
}