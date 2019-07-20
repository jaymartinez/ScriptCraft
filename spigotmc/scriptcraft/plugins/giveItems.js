var utils  = require('utils'), 
    name   = "", 
    player = null, 
    items  = require('items'), 
    inv    = require('inventory');

/**Gives the user a bunch of stuff when they join */
function givePlayerStuff(event) {
    var name = event.player.name;
    console.log(">>> " + name);
    if (!name) {
      name = "bannerpilot";
      player = utils.player(name);
    }

    echo(event.player||player, "Welcome to " + __plugin);
    console.log(">>> Player Joined!! >>> Items is " + typeof items + " >>> Player is " + typeof player);

    /* should return
    { world: 'world5',
        x: 56.9324,
        y: 103.9954,
        z: 43.1323,
        yaw: 0.0,
        pitch: 0.0
    }
    */
    var location = utils.getPlayerPos(name); //utils.locationToJSON();
    console.log(">>> World: %s, x: %f, y: %f, z: %f, yaw: %f, pitch: %f",
        location.world,location.x,location.y,location.z,location.yaw,location.pitch);

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
}

events.playerJoin(givePlayerStuff);


