var Pennsieve = require('../pennsieve/pennsieve.js');
var ps = new Pennsieve();

ps.getUser()
    .then(response => {
        console.log('success! response:')
        console.log(response)
    })
    .catch(err => {
        console.log('failed! err:')
        console.log(err)
    })
