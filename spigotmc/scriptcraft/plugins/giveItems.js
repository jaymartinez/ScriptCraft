exports.giveItems = (function (_, utils, items) {
    this.name = "";
    this.player = null;
    //this.items = new items();

    console.log('events is ' + typeof events);
    console.log('items ' + typeof items.prototype);
    console.log('underscore is ' + typeof _);

    function givePlayerStuff (event) {
        var player = event.player;
        var location = utils.getPlayerPos(player.name); //utils.locationToJSON();
        console.log(">>> World: %s, x: %f, y: %f, z: %f, yaw: %f, pitch: %f",
            location.world,location.x,location.y,location.z,location.yaw,location.pitch);
        console.log("items is: " + typeof items);
       // echo(event.player||player, "Welcome to " + __plugin);
        console.log(">>> Player Joined!! >>> Items is " + typeof items + " >>> Player is " + typeof player);
        console.log("type of material = " + typeof Material);

        /*
        inv(event.player).add(items.wool(50))
        .add(items.cookie(10))
        .add(items.bedrock(50))
        .add(items.birchFenceGate(5))
        .add(items.bone(10))
        .add(items.bow(1))
        .add(items.arrow(64))
        .add(items.coal(64))
        .add(items.command(1))
        .add(items.commandChain(1))
        .add(items.commandMinecart(1))
        .add(items.compass(1))
        .add(items.cookedBeef(50))
        .add(items.cookedMutton(50))
        .add(items.cookedRabbit(50))
        .add(items.daylightDetector(10))
        .add(items.diamondAxe(2))
        .add(items.diamondPickaxe(3))
        .add(items.diamondSword(2))
        .add(items.diamondHelmet(1))
        .add(items.diamondLeggings(1))
        .add(items.diamondSpade(1))
        .add(items.diamondChestplate(1))
        .add(items.diamondBoots(1))
        ;
        */
    };
    
    events.blockBreak(function (event) {
        
    });
    events.playerJoin(_.bind(givePlayerStuff, this));
    return this;

})(require('underscore'), require('utils'), require('../modules/items.js'));

