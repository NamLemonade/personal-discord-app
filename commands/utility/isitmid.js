const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('isitmid')
		.setDescription('Is it mid?')
		.setDMPermission(true),
	async execute(interaction) {
		const randomDecision = [
			"It's peak! <:dolphinbluegood:1278336681132687433>",
			"It's mid. <:dolphinbluemid:1278336796840951808>",
			"It's ass. <:dolphinbluebad:1278336531454758912>",
		];
		await interaction.reply(randomDecision[Math.floor(Math.random() * randomDecision.length)]);
	},
};