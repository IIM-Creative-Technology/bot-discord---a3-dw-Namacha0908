const clientLoader = require('./src/clientLoader');
const commandLoader = require('./src/commandLoader');è
const xp = require('./database');
const {Discord, Permissions} = require('discord.js');

const filter = require("./features/filter");
const level = require("./features/level");
const bridge = require('./features/bridge');

require('colors');
require('dotenv');

// const COMMAND_PREFIX = process.env.COMMAND_PREFIX;

const COMMAND_PREFIX = "!t-";

clientLoader.createClient(['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'])
  .then(async (client) => {
    await commandLoader.load(client);

  client.on('guildMemberAdd', member => {
        member.guild.roles.fetch().then((roles) => {
                  roleFound = null
                  roles.forEach(role => {
                    if (role.name == `noob`) {
                      roleFound = role
                    }
                  });

                  if (roleFound) {
                    member.roles.add(roleFound).catch((err) => { })
                  } else {
                    member.guild.roles.create({
                      name: `noob`,
                      color: 'BLACK',
                      permissions: [
                        Permissions.DEFAULT
                      ]
                    }).then((newRole) => {
                      member.roles.add(newRole)
                    })
                  }
                })      
  })

      xp.connect();
      client.on('messageCreate', async (message) => {

          filter(message);
          level(message);
          bridge(message, client);
  
    
      // Ne pas tenir compte des messages envoyés par les bots, ou qui ne commencent pas par le préfix
      if (message.author.bot || !message.content.startsWith(COMMAND_PREFIX)) return;

      // On découpe le message pour récupérer tous les mots
      const words = message.content.split(' ');

      const commandName = words[0].slice(COMMAND_PREFIX.length); // Le premier mot du message, auquel on retire le préfix
      const arguments = words.slice(1); // Tous les mots suivants sauf le premier

      if (client.commands.has(commandName)) {
        // La commande existe, on la lance
        client.commands.get(commandName).run(client, message, arguments);
      } else {
        // La commande n'existe pas, on prévient l'utilisateur
        await message.delete();
        await message.channel.send(`The ${commandName} does not exist.`);
      }
// INSERT INTO table VALUES ('valeur 1', 'valeur 2', ...)
// INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37'
    })
  })
  
