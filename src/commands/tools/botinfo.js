const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Shows the bot's information"),
    async execute(interaction, client) {

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({
                        name: client.user.username,
                        iconURL: client.user.displayAvatarURL()
                    })
                    .addFields(
                        {
                            name: 'Who am I?',
                            value: `I'm **${client.user.username}**, a Discord bot made with discord.js. My utility is all about programming, publishing it in-guild with custom visibility (Public, Private, or Unlisted), and for 100% free!`
                        },
                        {
                            name: 'Where are all the available commands?',
                            value: `Type in the chat \`/\`, select my avatar and you will see all the commands! You can also use \`/help\` to get a list of currently available commands`
                        },
                        {
                            name: 'Special thanks',
                            value: '- **swiftyedz#2924 - Development:** Creating the bot & project'
                        }
                    )
            ],
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setURL("https://discord.com/oauth2/authorize?client_id=1054032393071251506&scope=bot%20applications.commands&permissions=277025770568")
                            .setLabel('Invite me!')
                            .setStyle(ButtonStyle.Link)
                            .setDisabled(false)
                    )
            ]
        });

    },
};