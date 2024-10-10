const CustomBlock = require('../CustomBlock');

class Maroon extends CustomBlock {
    constructor() {
        // ID, ext
        super(67, false);

        this.name = "Black";

        this.solidity = this.solidityModes.solid;
        this.speed = 128;

        // textures
        this.top = 87;
        this.side = 87;
        this.bottom = 87;
        
        this.transmitLight = false;

        this.sound = this.sounds.wool;

        this.bright = false;
        this.height = 16;
        this.drawMode = this.drawModes.opaque;

        this.fogDensity = 0;
        this.fogR = 255;
        this.fogG = 255;
        this.fogB = 255;
    }
}

module.exports = Maroon;