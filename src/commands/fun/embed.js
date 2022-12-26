const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
        .setTitle(`This is an embeded message!`)
        .setDescription('This is a very cool description!') 
        .setColor("Blurple")
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL()) 
        .setTimestamp(Date.now())
        .setAuthor({
            url: `https://youtube.com/swiftyedz`,
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        .setURL(`https://youtube.com/`)
        .addFields([
            {
                name: `Field 1`,
                value: `Roses are Red`,
                inline: true
            },
            {
                name: `Field 2`,
                value: `Berries are Blue`,
                inline: true
            }
        ]);
        
        await interaction.reply({
            embeds: [embed]
        });
  },
};