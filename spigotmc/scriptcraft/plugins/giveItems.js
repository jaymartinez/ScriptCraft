exports.giveItemsObject = 
(function (_, utils, items, inv) {
    this.name = "";
    this.player = null;

    function givePlayerStuff (event) {
        var player = event.player;
        var playerInv = inv(player);
        var location = utils.getPlayerPos(player.name);
        var i = 0;
        console.log(">>> World: %s, x: %f, y: %f, z: %f, yaw: %f, pitch: %f",
            location.world,location.x,location.y,location.z,location.yaw,location.pitch);

            for (var prop in items) {
                if (typeof items[prop] !== "function") {
                    continue;
                }

                for (i = 1; i <= 64; i++) {
                    if (playerInv.contains(items[prop](i))) {
                        playerInv.remove(items[prop](i));
                    }
                }
            }
            playerInv.add(items.diamondPickaxe(1));
    };
    
    events.blockBreak(function (event) {
        var location = event.block.location;
        var i = 0;
        for (var j in event) {
            console.log("!!!" + JSON.stringify(j));
            if (j == "block") {
                for (var k in j) {
                    console.log("block[" + k + "]: " + j[k]);
                }
            }
        }
    });

    events.playerJoin(_.bind(givePlayerStuff, this));
    return this;

})(require('underscore'), 
    require('utils'), 
    require('../modules/items.js'), 
    require('inventory'));

