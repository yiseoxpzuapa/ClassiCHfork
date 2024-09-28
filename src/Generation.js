const world = require('./World');

class Generation {
    constructor(type) {
        this.type = type;

        this.x = world.x;
        this.y = world.y;
        this.z = world.z;
        this.halfY = world.halfY;
    }

    // overriden by subclasses
    generate() {}

    setBlock(type, bx, by, bz) {
        world.setBlock(type, false, bx, by, bz);
    }

    getBlock(bx, by, bz) {
        return world.getBlock(bx, by, bz);
    }

    tree(tx, ty, tz) {
        world.tree(tx, ty, tz, false);
    }

    treeNearby(tx, ty, tz) {
        return world.treeNearby(tx, ty, tz);
    }
}

module.exports = Generation;