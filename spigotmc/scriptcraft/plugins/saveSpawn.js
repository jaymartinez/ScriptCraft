var savedLocation = null;
var utils = require('utils'); 
var entities = require('entities');
var teleport = require('teleport');
var bkPlayer = org.bukkit.entity.Player;

function setSpawn(params, sender) {
    echo("Your spawn point has been saved! Run the 'telespawn' command to teleport to it.");
    savedLocation = utils.getPlayerPos(sender.name);
}

/*
var projectile = event.entity,
        world = projectile.world,
        shooter = projectile.shooter,
        arrowType;

    if (projectile instanceof bkArrow 
        && shooter instanceof bkPlayer) {

        projectile.remove();
        teleport(shooter, projectile.location);
    }

*/

function telespawn(params, sender) {
    var player = utils.player(sender.name);

    echo(sender.name + ", you called telespawn!");
    teleport(player, savedLocation);
}

command(setSpawn);
command(telespawn);