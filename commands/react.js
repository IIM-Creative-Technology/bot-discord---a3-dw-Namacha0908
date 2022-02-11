const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
    const bibouRole = message.guild.roles.cache.get("940936524994846760");
    const bibaRole = message.guild.roles.cache.get("940936642888339486");

    
    const bibouEmoji = message.guild.roles.cache.get("940951143557767218");

    const bibaEmoji = message.guild.roles.cache.get("940886702321467463");

    const embed = new Discord.MessageEmbed();
    
 embed.setTitle("Rôles")
  embed.setDescription("Cliquez pour avoir un rôle !")
//   embed.color("#FFFF")
  embed.addField("Les rôles dispos: ", `${bibouEmoji} - bibou  ${bibaEmoji} - biba`);
    
    
  message.channel.send({ embeds: [embed] })
};

module.exports.help = {

}

module.exports.name = 'react';