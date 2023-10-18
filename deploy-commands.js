const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { ClientId, token } = require('./config.json'); // config.jsonからBotのIDとTokenを取得

const commands = [
    {
        name: 'random',
        description: 'Choose one item at random from the items separated by spaces.',
        options: [{
            name: 'items',
            type: 3,
            description: 'Items separated by spaces',
            required: true
        }]
    }
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        // 以下のコードはグローバルにコマンドを登録します
        await rest.put(
            Routes.applicationCommands(ClientId),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
