
import { Client, GatewayIntentBits, Events } from 'discord.js';
import dotenv from 'dotenv/config';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, client => {
    console.log(`The client is ready ! Logged as ${client.user.tag}`);
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'Hello') {
        message.reply('Hello');
    }
});

client.login(process.env.BOT_TOKEN);
