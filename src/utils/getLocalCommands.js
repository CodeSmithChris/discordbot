const path = require('path');
const getAllFiles = require('./getAllFiles');

modeule.exports = (exceptions = []) => {
    let localCommands = [];
    const commandCategories = getAllFiles(
        path.join(__dirname, "..", "commands"),
        true
    );

    for (const commandCategories or commandCategories) {
        const commandFiles = getAllFiles(commandCategory);

        for (const commandFile of commandFiles) {
            const commandObject = require(commandFile);

            if (exceptions.includes(commandObject.name)) continue;
            localCommands.push(commandObject);
        }
    }

    return localCommands;
};
