const Command = require('../Command');

const ServerMessagePacket = require('../Packets/Server/Message');

const world = require('../World');

class CommandAbout extends Command {
    constructor(client, args) {
        super(client, args);

        this.name = "backup";
        this.description = "Saves a backup of the current world.";

        this.op = true;
        this.hidden = false;
    }

    execute() {
        new ServerMessagePacket([this.client], 0xFF, "Saving backup...");

        if (world.backup())
            new ServerMessagePacket([this.client], 0xFF, "Backup saved.");
        else
            new ServerMessagePacket([this.client], 0xFF, "Something went wrong.");
    }
}

module.exports = CommandAbout;