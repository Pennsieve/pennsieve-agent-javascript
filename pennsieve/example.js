var Pennsieve = require('./pennsieve.js');

ps=new Pennsieve()

logger = function(err, response) {
    if (err)
        throw err;
    console.log(response)
};


p = new Pennsieve()
p.getUser(callback=logger)
p.switchProfile('pennsieve-agent', logger)
p.listManifests(logger);
//p.useDataset({dataset_id : 'N:dataset:...' })
//p.createManifest({base_path : 'pennsieve.js'})
