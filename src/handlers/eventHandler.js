const path = require('path');
const getAllFiles = require("../utils/getAllFiles");

modul.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', "events"), true);

    for (const eventFolder of eventFolders) {
        const eventFiles = getAllFiles(eventFolder);
        let eventName;

        eventName = eventFolder.replace(/\\/g, '/').split("/").pop();

        eventName === "validations" ? (eventName = "interactionCreate") : eventName;

        client.on(eventName, async (arg) => {
            for (const evenFile of eventFiles) {
                const eventFunction = require(eventFile);
                await evenFunction(client, arg);
            }
        });
    }
};
