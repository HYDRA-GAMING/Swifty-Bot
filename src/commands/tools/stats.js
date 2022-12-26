const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os  = require('os')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Check the client's statistics !"),
     async execute(interaction, client)  {

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({
                        name: client.user.username,
                        iconURL: client.user.displayAvatarURL({ dynamic: true })
                    })
                    .setTitle(client.user.username + '\'s statistics:')
                    .addFields(
                        { name: "Name", value: client.user.tag, inline: true },
                        { name: "Identification", value: `\`${client.user.id}\``, inline: true },
                        { name: "Total guilds joined", value: `${client.guilds.cache.size} servers`, inline: true },
                        { name: "Application commands", value: `${client.commands.size} commands`, inline: true },
                        { name: 'Author', value: `${require('../../../package.json').author || "Unknown"}`, inline: true },
                        { name: "Language", value: "JavaScript", inline: true },
                        { name: 'Last version', value: `${require('../../../package.json').version}`, inline: true },
                        { name: 'discord.js version', value: `${require('../../../package.json').dependencies['discord.js'].replace('^', '')}`, inline: true },
                        { name: "Node.JS version", value: `${process.version}`, inline: true },
                    )
                    .setColor('DarkButNotBlack')
                ]
            });
    
        },
    };