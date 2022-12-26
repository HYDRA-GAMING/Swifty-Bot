const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("membercount")
    .setDescription("Shows you the member count of this server"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(interaction, client) {
    const membercountEmbed = new EmbedBuilder()
      .setColor("#0155b6")
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
    })
      .setDescription(
        `There are **${interaction.guild.memberCount}** awesome members in **${interaction.guild.name}**`
      );

    await interaction.reply({
      embeds: [membercountEmbed],
    });
  },
};