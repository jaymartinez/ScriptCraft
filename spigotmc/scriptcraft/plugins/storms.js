var _ = require('../modules/underscore.js');
(function () {
    var stormCount = 0;
    var thisWorld = server.worlds.get(0);
    var multiplier = (40 * 60) * 1000;
    var timer = setInterval(timerHandler, multiplier);

    console.log("underscore object is " + typeof _);
    function timerHandler () {
        console.log("Multiplier is " + multiplier);
        if (typeof thisWorld !== "undefined") {
            if (stormCount % 5 === 0) {
                console.log("SETSTORM=TRUE")
                thisWorld.setStorm(true);
            } else {
                console.log("SETSTORM=FALSE")
                thisWorld.setStorm(false);
            }
        }
        stormCount += 1;
    }

})();