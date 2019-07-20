var _ = require('../modules/underscore.js');
(function () {
    var stormOn = false,
        thisWorld = server.worlds.get(0),
        interval = 600000,
        timer = setInterval(timerHandler, interval);

    function timerHandler () {
        if (stormOn) {
            thisWorld.setStorm(false);
            stormOn = false;
            console.log("SETSTORM=FALSE")
        } else {
            console.log("SETSTORM=TRUE")
            stormOn = true;
            thisWorld.setStorm(true);
        }
    }

})();