const { SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


module.exports = {
  data: new SlashCommandBuilder()
    .setName("song")
    .setDescription("Get a song's lyrics!")
    .addStringOption((option) =>
      option
        .setName("title")
        .setDescription("Enter the name of a title (song) in Format !")
        .setRequired(true)

    ),

  async execute(interaction, client) {
    const { options } = interaction;

    const songreq = options.getString('title');
    
    

    async function lyricofsong() {
        await fetch(`https://some-random-api.ml/others/lyrics?title=${songreq}`).then(async res => {
            let songlyr = await res.json();

            console.log(songlyr);


            let title = songlyr.title;
            let thumbnail = songlyr.thumbnail.genius;
            let finallyr = songlyr.lyrics;
            let author = songlyr.author;
            let disclaimer = songlyr.disclaimer;


            const embed = new EmbedBuilder()
            .setTitle(`${title}`)
            .setDescription(`${finallyr}`)
            .setAuthor({
                name: author
            })
            .setThumbnail(thumbnail)
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: disclaimer,
            })

            return interaction.reply({
                embeds: [embed]
            });
        });
    }

    lyricofsong();

  }
}
