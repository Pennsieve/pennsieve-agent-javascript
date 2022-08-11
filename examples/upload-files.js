var Pennsieve = require('../pennsieve/pennsieve.js');

const ps = new Pennsieve();
let datasetId = null
let fileList = []
let targetBasePath = '.'
let manifestId = -1

// parse command-line arguments
const argv = process.argv;
const args = argv.slice(2);
for (let i = 0; i < args.length; i++) {
  // console.log(`args[${i}] = ${args[i]}`)
  switch(args[i]) {
    case '--dataset':
      if (args[i+1]) {
        datasetId = args[i+1]
        i += 1
      }
      break
    case '--files':
      for (let j=i+1; j < args.length; j++) {
        fileList.push(args[j])
      }
      break
    case '--target':
      if (args[i+1]) {
        targetBasePath = args[i+1]
        i += 1
      }
  }
}

console.log(`datasetId: ${datasetId}`)
console.log(`targetBasePath: ${targetBasePath}`)
console.log('fileList: ')
console.log(fileList)

console.log(`reAuthenticate()`)
ps.reAuthenticate()
  .then(response => {
    console.log(`useDataset()`)
    return ps.useDataset(datasetId)
  })
  .then(response => {
    console.log(`createManifest()`)
    return ps.createManifest(base_path='', target_base_path=targetBasePath, files=fileList)
  })
  .then(response => {
    manifestId = response.manifest_id;
    console.log(`uploadManifest()`)
    return ps.uploadManifest(manifestId)
  })
  .catch(err => {
    console.log(`Error: ${err}`)
  })
