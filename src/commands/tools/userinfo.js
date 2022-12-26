const discord = require("discord.js");
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Get a brief info about a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("Select a user").setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(interaction, client) {
    const User = interaction.options.getUser('user');

    const userinfoEmbed = new EmbedBuilder()
      .setColor("#0155b6")
      .setThumbnail(User.displayAvatarURL())
      .setAuthor({
        name: User.tag,
        iconURL: User.displayAvatarURL(),
      })
      .addFields(
        {
          name: "Account Created At",
          value: `${User.createdAt.toLocaleString()}`,
          inline: true,
        },
        {
          name: "Joined Server At",
          value: `${interaction.guild.joinedAt.toLocaleString()}`,
          inline: true,
        },
        {
          name: "User ID",
          value: `${User.id}`,
          inline: true,
        },
        {
          name: "User Tag",
          value: `${User.tag}`,
          inline: true,
        },
        {
          name: "Username",
          value: `${User.username}`,
          inline: true,
        },
        {
          name: "Is User Bot",
          value: `${User.bot}`,
          inline: true,
        }
      )
      .setFooter({
        text: "This data gets changed according to the user",
      });

    await interaction.reply({
      embeds: [userinfoEmbed],
    });
  },
};