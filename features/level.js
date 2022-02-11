const {Discord, Permissions} = require('discord.js');
const xp = require('../database');


module.exports = (message) => {
    xp.executeQuery(`SELECT * FROM xp WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`).then((result) => {
          if (result.length == 0) {
              xp.executeQuery(`INSERT INTO xp (user_id, xp_count, xp_level, server_id) VALUES (${message.author.id}, 1, 0, ${message.guild.id})`)
          }
          if(result.length > 0) {
              xp.executeQuery(`UPDATE xp SET xp_count = xp_count + 1 WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`)
          }
          if(result.length > 0 && result[0].xp_count >= result[0].xp_level + 3) {
              xp.executeQuery(`UPDATE xp SET xp_level = xp_level + 1, xp_count = 0 WHERE user_id=${message.author.id} AND server_id=${message.guild.id}`)
      

              message.guild.roles.fetch().then((roles) => {
                  roleFound = null
                  roles.forEach(role => {
                    if (role.name == `T-LVL-${result[0].xp_level + 1}`) {
                      roleFound = role
                    }
                  });

                  if (roleFound) {
                    message.member.roles.add(roleFound).catch((err) => { })
                  } else {
                    message.guild.roles.create({
                      name: `T-LVL-${result[0].xp_level + 1}`,
                      color: 'YELLOW',
                      permissions: [
                        Permissions.FLAGS.ADMINISTRATOR
                      ]
                    }).then((newRole) => {
                      message.member.roles.add(newRole)
                    })
                  }
                })      
        }
      })

}