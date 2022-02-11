const {Discord, Permissions} = require('discord.js');
const xp = require('../database');


module.exports = (message, client) => {
    const channelName = "shared";
      if (`${message.channel.name}` === channelName && `${message.author.bot}` == "false") {
              client.guilds.fetch().then((guilds) => {
                    // console.log(guilds)
                  guilds.forEach(guild => {
                      guild.fetch().then(guild => {
                        guild.channels.fetch().then(channels => {
                          channels.forEach(channel => {
                            if (channel.name === "shared" && channel.id != message.channel.id) {
                                const Discord = require('discord.js');

                                const embed = new Discord.MessageEmbed();
                                embed.setTitle(`${message.author.username}` + " a envoyé un message dans le channel " + channel.name)
                                embed.setDescription(message.content)

                                channel.send({ embeds: [embed] })
                            }
                          })
                        })                      
                    })
                  });
                });
     }
}