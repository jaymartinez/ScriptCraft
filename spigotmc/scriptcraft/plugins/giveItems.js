exports.giveItemsObject = 
(function (_, utils, items, inv) {
    this.name = "";
    this.player = null;

    function givePlayerStuff (event) {
        var player = event.player;
        var location = utils.getPlayerPos(player.name);
        console.log(">>> World: %s, x: %f, y: %f, z: %f, yaw: %f, pitch: %f",
            location.world,location.x,location.y,location.z,location.yaw,location.pitch);

            for (var prop in items) {
                if (typeof items[prop] !== "function") {
                    continue;
                }
                console.log(prop + " is " + typeof items[prop]);
                inv(player).add(items[prop](10));
            }
    };
    
    events.blockBreak(function (event) {

    });

    events.playerJoin(_.bind(givePlayerStuff, this));
    return this;

})(require('underscore'), 
    require('utils'), 
    require('../modules/items.js'), 
    require('inventory'));

