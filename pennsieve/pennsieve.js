var PROTO_PATH = __dirname+'/protos/agent.proto'
var async = require('async');
var fs = require('fs');
var parseArgs = require('minimist');
var path = require('path');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var routeguide = grpc.loadPackageDefinition(packageDefinition);
console.log(routeguide);


function main() {
    var stub = new routeguide.protos.Agent('localhost:9000', grpc.credentials.createInsecure());
//    console.log(stub)

    stub.getUser({}, function(err, response) {
        console.log(response);
        console.log(err);
    });
}


main()