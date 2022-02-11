const Discord = require('discord.js');
const api = require('axios');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
  res = await api.get(`https://api.themoviedb.org/3/search/movie?api_key=ba1d5721b9f06403fa684e62acb56065&language=en-US&page=1&include_adult=false&query=${arguments[0]}`)

    const embed = new Discord.MessageEmbed();
    embed.setTitle(res.data.results[0].original_title)
    embed.setDescription(res.data.results[0].overview)
    embed.setThumbnail(`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${res.data.results[0].poster_path}`)

    message.channel.send({ embeds: [embed] })
};

module.exports.name = 'film';
