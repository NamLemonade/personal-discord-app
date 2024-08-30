const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nintendodirect')
		.setDescription('Opens a modal to let you format a Nintendo Direct announcement!')
		.setDMPermission(true),
	async execute(interaction) {
		// await interaction.reply('Pong!');
	},
};