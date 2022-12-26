const { SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


module.exports = {
  data: new SlashCommandBuilder()
    .setName("pokedex")
    .setDescription("Search for a pokemon !")
    .addStringOption((option) =>
      option
        .setName("pokemon")
        .setDescription("Enter the name of a pokemon")
        .setRequired(true)

    ),

  async execute(interaction, client) {
    const { options } = interaction;

    const search = options.getString('pokemon');
    
    

    async function actualpokemon() {
        await fetch(`https://some-random-api.ml/pokemon/pokedex?pokemon=${search}`).then(async res => {
            let pokesearch = await res.json();

            console.log(pokesearch);


            let name = pokesearch.name;
            let description = pokesearch.description;
            let id = pokesearch.id;
            let type = pokesearch.type;
            let species = pokesearch.species;
            let abilities = pokesearch.abilities;
            let height = pokesearch.height;
            let weight = pokesearch.weight;
            let xp = pokesearch.base_experience;
            let gender = pokesearch.gender;
            let egggroups = pokesearch.egg_groups;
            let hp = pokesearch.stats.hp;
            let atk = pokesearch.stats.attack;
            let def = pokesearch.stats.defense;
            let sptak = pokesearch.stats.sp_atk;
            let spdef = pokesearch.stats.sp_def;
            let speed = pokesearch.stats.speed;
            let totals = pokesearch.stats.total;
            let evolstage = pokesearch.family.evolutionStage;
            let evolline = pokesearch.family.evolutionLine;
            let normsprite = pokesearch.sprites.normal;
            let animsprite = pokesearch.sprites.animated;


            const embed = new EmbedBuilder()
            .setTitle(`${name}
            ------------------------------`)
            .setDescription(`${description}
            **ID**: ${id}
            **Type**: ${type}
            **Species**: ${species}
            **Abilities**: ${abilities}
            **Height**: ${height}
            **Weight**: ${weight}
            **XP**: ${xp} xp
            **Gender**: ${gender}
            **Egg Groups**: ${egggroups}
            ------------------------------`)
            .addFields(
                {
                    name: 'Stats',
                    value: `**Hp**: ${hp}
                    **Attack**: ${atk}
                    **Defence**: ${def}
                    **Special Attack**: ${sptak}
                    **Special Defence**: ${spdef}
                    **Speed**: ${speed}
                    **Total Rating**: ${totals}`
                },
                {
                    name:'Family',
                    value: `**Evolution Stage**: ${evolstage}
                    **Evolution Line**: ${evolline}`
                },
            )
            .setThumbnail(animsprite)
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag,
            })

            return interaction.reply({
                embeds: [embed]
            });
        });
    }

    actualpokemon();

  }
}
