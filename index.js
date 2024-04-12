const {Client, ActivityType, GatewayIntentBits, PartialTypes, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permission, Events, IntentsBitField} = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent, 
    ],
});

client.on(Events.ClientReady, (x) => {
    console.log(`${x.user.tag} is ready!`);

////////////////////////////////////////////////////////////////////////////////////////
//
// Bot displayed activities
// Set to 5 minute rotation
//
    const activities = [
        {
            name: 'Anime',
            type: ActivityType.Watching,
        },
        {
            name: 'LOFI',
            type: ActivityType.Listening,
        },
        {
            name: 'Video Games',
            type: ActivityType.Playing,
        }
    ]

    setInterval(() => {
        const random = Math.floor(Math.random()*activities.length);
        client.user.setActivity(activities[random]);
    }, 300000);

/////////////////////////////////////////////////////////////////////////////////////////
//
// Slash commands
//
    const ping = new SlashCommandBuilder() 
    .setName ('ping')
    .setDescription('Test for bot functionality');

    client.application.commands.create(ping);
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping') {
        interaction.reply(`Received!`);
    }
});

client.login(process.env.TOKEN);
