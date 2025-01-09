const {SlashCommandbuilder, PermissionFlagBits} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("test")
		.setDescription("Test if everything works")
		.setDMPermission(false)
		.addSubcommandGroup((subcommandgroup) => 
			subcommandgroup
				.setName("user")
				.setDescription("Configure a user.")
				.addSubCommand((subcommand) => 
					subcommand
						.setName("role")
						.setDescription("Configure a user's role.")
						.addUserOption((option) => 
							option
								.setName("user")
								.setDescription("The user to configure.")
					)
				)
				.addSubCommand((subcommand) => 
					subcommand
						.setName("nickname")
						.setDescription("Configure a user's nickname.")
						.addStringOption((option) =>
							option
								.setName("nickname")
								.setDescription("The nickname for the user.")
						)
						.addUserOption((option) => 
							option
								.setName("user")
								.setDescription("The user to configure.")
						)
				)
		)
		.addSubCommand((subcommand) => 
			subcommand
				.setName("message")
				.setDescription("Configure a message.")
		),
	.toJSON(),
	userPermissions: [PermissionFlagsBits.ManageMessages],
	botPermissions: [PermissionFlagBits.Connect], 

	run: (client, interaction) => {
		return interaction.reply("This is a test command.")
	}
};
