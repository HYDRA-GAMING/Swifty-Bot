const discord = require("discord.js");
const jokes = require("discord-jokes");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("dadjoke")
    .setDescription("Get a random dad joke"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(interaction, client) {
    jokes.getRandomDadJoke(async function (joke) {
      const dadjokeEmbed = new discord.EmbedBuilder()
        .setColor("#0155b6")
        .setTitle("Here's a dad joke for you")
        .setTimestamp(Date.now())
        .setDescription(`**${joke}**`)
        .setFooter({
          iconURL: client.user.displayAvatarURL(),
          text: client.user.tag
        })

      await interaction.reply({
        embeds: [dadjokeEmbed],
      });
    });
  },
};