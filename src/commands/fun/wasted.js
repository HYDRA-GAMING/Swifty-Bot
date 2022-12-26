const { SlashCommandBuilder } = require("discord.js");
const discord = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wasted")
    .setDescription("Get a wasted overlay on a user's avatar")
    .addUserOption((option) =>
      option.setName("user").setDescription("Select a user").setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const avatarUrl = user.avatarURL({ extension: "jpg" });
    const overlay = `https://some-random-api.ml/canvas/wasted?avatar=${avatarUrl}`;

    await interaction.reply({
      content: overlay,
    });
  },
};