const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
    // message.channel.send(`Bonjour ${message.author.username}, voilà les commandes disponibles :`)
    const embed = new Discord.MessageEmbed();
    let i = 1;
    embed.setTitle(`Bonjour ${message.author.username}, voilà les commandes disponibles :`)
    client.commands.forEach(command => {
        // message.channel.send("t-" + command.name)
        embed.addField("Commande n°" + i, "!t-" + command.name)
        i++;
 })
 message.channel.send({ embeds: [embed] })
 i = 0;
};

module.exports.name = 'help';