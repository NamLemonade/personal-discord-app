require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActivityType } = require('discord.js');
// const { token } = require('./config.json');
const { DateTime } = require("luxon");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(process.env.DISCORD_TOKEN);
// client.login(token);

client.on("ready", () => {
	const customStatus = [
		'TOTSUGEKI!',
		'c.S > 2H > [4]6H > 5H > [4]6H > 5H WS > 6[H]',
		"PLeass dont make me code <:3",
		"La conne de floor 5",
		"I'd REALLY hate to be the dude that fucks with US!",
		"Ya think?",
		"TRAFIK!",
		"Chat let's kill ROBO-KY.",
		"Fun-KY!"
	];

	client.user.setActivity(customStatus[Math.floor(Math.random() * customStatus.length)], {
		type: ActivityType.Playing
	});

	client.user.setBanner("./images/kujikawaiiart.png");


	setInterval(() => {
		client.user.setActivity(customStatus[Math.floor(Math.random() * customStatus.length)], {
			type: ActivityType.Playing
		});
	}, 60000);
});


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'nintendodirect') {
		// Create the modal
		const modal = new ModalBuilder()
			.setCustomId('NintendoDirect')
			.setTitle('Nintendo Direct Formatter');

		// Add components to modal

		// Create the text input components
		const dateInput = new TextInputBuilder()
			.setCustomId('dateInput')
		    // The label is the prompt the user sees for this input
			.setLabel("YYYY-MM-DD")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const timeInput = new TextInputBuilder()
			.setCustomId('timeInput')
		    // The label is the prompt the user sees for this input
			.setLabel("HH:MM:SS (ET ONLY)")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const titleInput = new TextInputBuilder()
			.setCustomId('titleInput')
		    // The label is the prompt the user sees for this input
			.setLabel("Titre")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const descriptionInput = new TextInputBuilder()
			.setCustomId('descriptionInput')
			.setLabel("Description")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);

		const youtubeInput = new TextInputBuilder()
			.setCustomId('youtubeInput')
		    // The label is the prompt the user sees for this input
			.setLabel("Youtube link")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short)
			.setRequired(false);

		const twitchInput = new TextInputBuilder()
			.setCustomId('twitchInput')
		    // The label is the prompt the user sees for this input
			.setLabel("Twitch link")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short)
			.setRequired(false);

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(dateInput);
		const secondActionRow = new ActionRowBuilder().addComponents(timeInput);
		const thirdActionRow = new ActionRowBuilder().addComponents(titleInput);
		const fourthActionRow = new ActionRowBuilder().addComponents(descriptionInput);
		const fifthActionRow = new ActionRowBuilder().addComponents(youtubeInput);
		// const sixthActionRow = new ActionRowBuilder().addComponents(twitchInput);

		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourthActionRow, fifthActionRow);

		// Show the modal to the user
		await interaction.showModal(modal);
	}
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'NintendoDirect') {
		const date = interaction.fields.getTextInputValue('dateInput');
		const time = interaction.fields.getTextInputValue('timeInput');
		const title = interaction.fields.getTextInputValue('titleInput');
		const description = interaction.fields.getTextInputValue('descriptionInput');
		const youtube = interaction.fields.getTextInputValue('youtubeInput');
		// const twitch = interaction.fields.getTextInputValue('twitchInput');

		let youtubeLink = "";
		let twitchLink = "";

		if(youtube != "")
		{
			youtubeLink = "Youtube: " + youtube;
		}
		// if(twitch != "")
		// {
		// 	twitchLink = "Twitch: " + twitch;
		// }

		const isoDate = date + "T" + time + "-05:00";

        // J'ai pas de check pour match à date. Pcq j'men fout un peu.

        const dateTimeFormatted = DateTime.fromISO(isoDate).toUnixInteger() + ":F";

		await interaction.reply({ content: `<:dolphinblueexcited:1278336644943974412> [ <t:${dateTimeFormatted}> ] ${title}\n\n${description}\n\n${youtubeLink}` });
	}
});