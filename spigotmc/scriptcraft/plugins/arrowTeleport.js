// strike lightning wherever a player's arrow lands
var lightning = require('lightning');
var entities = require('entities');
var teleport = require('teleport');
var bkArrow = org.bukkit.entity.Arrow;
var bkPlayer = org.bukkit.entity.Player;

/*
events.projectileHit(function (event) {
    console.log("projectile hit");
    // it's an arrow and it was shot by a player,  strike lightning at the arrow location
    if (entities.arrow(event.projectile) && entities.player(event.projectile.owner)) {
        //lightning( event.projectile ); 
        arrows.teleport(event.player);
    }
});
*/

events.projectileHit(onArrowHit);

function onArrowHit(event) {
    var projectile = event.entity,
        world = projectile.world,
        shooter = projectile.shooter,
        arrowType;

        console.log('Arrow Hit!!!!!!!');
    if (projectile instanceof bkArrow 
        && shooter instanceof bkPlayer) {

        projectile.remove();
        teleport(shooter, projectile.location);
    }
}