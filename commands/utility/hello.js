const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('I say hello!')
		.setDMPermission(true),
	async execute(interaction) {
		await interaction.reply('Hello! Bonjour! <:dolphinblueheya:1278336697909645333>');
	},
};