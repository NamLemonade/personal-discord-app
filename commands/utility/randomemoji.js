const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomemoji')
		.setDescription('I spit out a random emoji!')
		.setDMPermission(true),
	async execute(interaction) {
		const randomEmojis = [
			'<:dolphinbluewoah:1278336903476940923>',
			'<:dolphinbluewink:1278336895033802844>',
			'<:dolphinbluevacay:1278336886259187793>',
			'<:dolphinblueswim:1278336874292973688>',
			'<:dolphinbluesparky:1278336865706967161>',
			'<:dolphinbluesparkle:1278336855242182768>',
			'<:dolphinbluespark:1278336846484606976>',
			'<:dolphinbluesing:1278336832182026301>',
			'<:dolphinblueshocked:1278336823533506583>',
			'<:dolphinblueok:1278336813555126342>',
			'<:dolphinbluenice:1278336805107667045>',
			'<:dolphinbluemid:1278336796840951808>',
			'<:dolphinblueloving:1278336787613225020>',
			'<:dolphinbluelovetext:1278336779128406111>',
			'<:dolphinblueloveheart:1278336770596929567>',
			'<:dolphinbluelove:1278336754272960654>',
			'<:dolphinbluelilheart:1278336732764573746>',
			'<:dolphinbluelaugh:1278336723130257418>',
			'<:dolphinbluejoy:1278336715253354620>',
			'<:dolphinbluehi:1278336707116404756>',
			'<:dolphinblueheya:1278336697909645333>',
			'<:dolphinblueheart:1278336689370169354>',
			'<:dolphinbluegood:1278336681132687433>',
			'<:dolphinblueflower:1278336671800102997>',
			'<:dolphinblueflame:1278336663290122393>',
			'<:dolphinblueexclaim:1278336653576114176>',
			'<:dolphinblueexcited:1278336644943974412>',
			'<:dolphinblueembarass:1278336634718523452>',
			'<:dolphinbluedrop:1278336625662759046>',
			'<:dolphinbluecry:1278336618696282290>',
			'<:dolphinblueconfuse:1278336611075227648>',
			'<:dolphinbluechill:1278336601788907581>',
			'<:dolphinbluecheerful:1278336594478235669>',
			'<:dolphinbluecheer:1278336588069208084>',
			'<:dolphinbluecelebrate:1278336580259680286>',
			'<:dolphinbluebigheart:1278336539775996076>',
			'<:dolphinbluebad:1278336531454758912>',
			'<:dolphinblueawooga:1278336524970229770>',
			'<:dolphinblueah:1278336517584195634>',
			'<:dolphinblue:1278336508797124679>'
		];
		await interaction.reply(randomEmojis[Math.floor(Math.random() * randomEmojis.length)]);
	},
};