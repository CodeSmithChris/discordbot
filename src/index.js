require('dotenv').config();

const { Client, GatewayIntentBits } = require( 'discord.js' );
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent, 
    ],
});

client.on("ready", (x) => {
    console.log( `${x.user.tag} is ready!` );

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
        const random = Math.floor( Math.random() * activities.length );
        client.user.setActivity( activities[random] );
    }, 300000);

/////////////////////////////////////////////////////////////////////////////////////////
//
//

eventHandler(client);

client.login(process.env.TOKEN);
