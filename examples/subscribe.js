var Pennsieve = require('../pennsieve/pennsieve.js');

logger = function(type, message) {
    console.log(`type: ${type} message:`)
    console.log(message)
};

const ps = new Pennsieve();
ps.subscribe(4, logger)
