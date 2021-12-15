module.exports = {
    name: 'help',
    description: "Help",
    execute(message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#6a329f')
        .setTitle("Interstellar Organ Trading")
        .setURL('http://trading.uyuyom.com/')
        .setDescription('Interstellar Organ Trading Commands')
        .setThumbnail('https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=')
        .addFields(
            {name: 'Bot Prefix', value: '`o!` | (Type `o!prefix <your-prefix>` for prefix change.)', inline: true},
            {name: 'Bot Help', value: 'Type `o!help` for displaying bot commands.', inline: true},
            {name: 'Leaderboard', value: 'Type `o!leaderboard` for displaying global leaderboard.', inline: true},
            {name: '\u200B', value: '\u200B'},
            {name: 'Get Trader Licence', value: 'Type `o!trader` for start playing.', inline: true},
            {name: 'Quid Wallet Balance', value: 'Type `o!wallet`for display your wallet.', inline: true},
            {name: 'List Organs', value: 'Type `o!list` for listing assets on the market.', inline: true},
            {name: '\u200B', value: '\u200B'},
            {name: 'Speculation Commands', value: 'Market Price Speculation'},
            {name: 'Pump (increase)', value: 'Type `o!pump <assetname>` to try increasing assets price.', inline: true},
            {name: 'Dump (decrease)', value: 'Type `o!dump <assetname>` to try decreasing assets price.', inline: true},
        )
        .setFooter('Interstellar Organ Trading made by nauxnam#8989');

        message.channel.send(helpEmbed).catch(console.error);
    }
}