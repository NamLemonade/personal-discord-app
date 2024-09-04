const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wakeup')
		.setDescription('My server goes to sleep sometimes... Wake me up with this ping')
		.setDMPermission(true),
	async execute(interaction) {
		await interaction.reply(`EEP! <:dolphinblueexclaim:1278336653576114176> I'm awake i'm awake!! Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(interaction.client.ws.ping)}ms`);
	},
};