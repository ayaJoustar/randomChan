const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'random') {
        const text = interaction.options.getString('items');
        if (!text) {
            return await interaction.reply("Please provide items separated by spaces.");
        }
        const items = text.split(/\s|　/);
        const randomItem = items[Math.floor(Math.random() * items.length)];

        await interaction.reply(`${text}  の中から選ばれたのは${randomItem}でした！`);
    }
});

client.login(token);
