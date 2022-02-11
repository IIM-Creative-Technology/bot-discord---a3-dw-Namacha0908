const Discord = require('discord.js');
insults = require("./insults.json");
const xp = require('../database');


module.exports = (message) => {
    insults.forEach(insult => {
        if(message.content.toLowerCase().includes(insult)) {
            message.delete();
            message.member.send(`Bonjour ${message.author.username} ! Le mot "${insult}" est interdit sur ce serveur ! Merci d'utiliser à bon escient la langue de Molière !`);
            xp.executeQuery(`SELECT * FROM xp WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`).then((result) => {
                if (result.length == 0) {
                    xp.executeQuery(`INSERT INTO xp (user_id, xp_count, xp_level, server_id) VALUES (${message.author.id}, 1, 0, ${message.guild.id})`)
                    xp.executeQuery(`INSERT INTO chances (user_id, server_id, chance) VALUES (${message.author.id}, ${message.guild.id}, chance + 1)`)
                    }
                    if (result.length > 0)  {
                        
                        xp.executeQuery(`SELECT * FROM chances WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`).then((result) => {
                        if (result.length == 0) {
                            xp.executeQuery(`INSERT INTO chances (user_id, server_id, chance) VALUES (${message.author.id}, ${message.guild.id}, chance + 1)`)
                        }
                        if (result.length > 0) {

                                xp.executeQuery(`UPDATE chances SET chance = chance + 1 WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`)
                                console.log("Combien de chances ?" + result[0].chance)
                                if (result[0].chance >= 5) {
                                    xp.executeQuery(`UPDATE chances SET chance = 0 WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`)
                                    if(message.member.bannable) {
                                        message.member.ban();
                                    }
                                }
                            }
                    })
                    }

                })}
    })
}