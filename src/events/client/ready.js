const { ActivityType } = require('discord.js')
module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    setInterval(client.pickPresence, 10 * 999);
    console.log(`${client.user.tag} has logged on to discord`);
  },
};
