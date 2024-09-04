const { SlashCommandBuilder } = require('discord.js');
const { DateTime } = require("luxon");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timestamp')
		.setDescription("In the future, I'll reply with a formatted time stamp!")
        .addStringOption(option =>
            option.setName('date')
                .setDescription('Set the date! FORMAT: YYYY-MM-DD')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('time')
                .setDescription('Set the time! FORMAT: HH:MM:SS (ET ONLY)')
                .setRequired(true))
        .addStringOption(option =>
		    option.setName('format')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoices(
                    { name: 'Week, date and time', value: 'F' },
                    { name: 'Date and time', value: 'f' },
                    { name: 'Date', value: 'D' },
                    { name: 'Time', value: 't' },
			))
        
		.setDMPermission(true),
	async execute(interaction) {
        const date = interaction.options.getString('date');
        let time = "00:00:00";

        if(interaction.options.getString('time') != "")
            time = interaction.options.getString('time');

		const format = interaction.options.getString('format');

        const isoDate = date + "T" + time + "-04:00";

        // J'ai pas de check pour match à date. Pcq j'men fout un peu.

        const dateTimeFormatted = DateTime.fromISO(isoDate).toUnixInteger();

        const unixTimestampWithFormat = dateTimeFormatted + ":" + format;

        await interaction.reply(`Here's the time, formatted for your viewing pleasure <:dolphinblueheya:1278336697909645333>: <t:${unixTimestampWithFormat}>`);
	},
};