const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goodbot')
		.setDescription('Thank me for my good work!')
		.setDMPermission(true),
	async execute(interaction) {
		const randomThankyou = [
			'Awww thank you!! <:dolphinbluecheerful:1278336594478235669>',
			'Teehee, thanks! <:dolphinblueflower:1278336671800102997>',
			'You should thank my creator, Nam, too! <:dolphinbluelilheart:1278336732764573746>'
		];
		await interaction.reply(randomThankyou[Math.floor(Math.random() * randomThankyou.length)]);
	},
};