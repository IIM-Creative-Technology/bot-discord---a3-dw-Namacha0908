const Discord = require('discord.js');
const xp = require('../database');


/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
    //    xp.connect();

    xp.executeQuery(`SELECT xp_level FROM xp WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`).then((result) => {
        console.log(result[0].xp_level);
        const embed = new Discord.MessageEmbed();
        embed.setTitle("Bravo "+`${message.author.username}`)
        embed.setDescription("Vous avez atteint le niveau " + result[0].xp_level + "!")
        embed.setColor("RED");
        message.channel.send({ embeds: [embed] })
    })


};

module.exports.name = 'level';