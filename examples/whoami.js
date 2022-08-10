var Pennsieve = require('../pennsieve/pennsieve.js');
var ps = new Pennsieve();

ps.getUser(function(err, response) {
  if (err) {
    throw err;
  }
  else {
    user = response;
    console.log('user:');
    console.log(user)
  }
});
