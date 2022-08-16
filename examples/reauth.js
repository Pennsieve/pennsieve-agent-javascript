var Pennsieve = require('../pennsieve/pennsieve.js');

const ps = new Pennsieve();

console.log(`reAuthenticate()`)
ps.reAuthenticate()
    .then(response => {
        console.log('success! response:')
        console.log(response)
    })
    .catch(err => {
        console.log('failed! err:')
        console.log(err)
    })
