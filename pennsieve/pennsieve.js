var PROTO_PATH = __dirname+'/protos/agent.proto'
//var async = require('async');
//var fs = require('fs');
//var parseArgs = require('minimist');
//var path = require('path');
//var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
//var protobuf = require("protobufjs/minimal");

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: false,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });



class Pennsieve {

    constructor(target='localhost:9000') { 
        //creating a connection stub
        const routeguide = grpc.loadPackageDefinition(packageDefinition);
        this.client = new routeguide.protos.Agent('localhost:9000', grpc.credentials.createInsecure());
    }


    // Manifest Endpoints
    createManifest(request) {
        this.client.createManifest(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    addToManifest(request) {
        this.client.addToManifest(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    removeFromManifest(request) {
        this.client.removeFromManifest(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    deleteManifest(request) {
        this.client.deleteManifest(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    resetManifest(request) {
        this.client.resetManifest(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    listManifests(request) {
        this.client.listManifests(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    listManifestFiles(request) {
        this.client.listManifestFiles(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    syncManifest(request) {
        this.client.syncManifest(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }


    // Upload Endpoints
    uploadManifest(request) {
        this.client.uploadManifest(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    cancelUpload(request) {
        this.client.cancelUpload(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }


    // Server Endpoints
    subscribe(request) {
        this.client.subscribe(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    unsubscribe(request) {
        this.client.unsubscribe(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }


    //User Endpoints
    getUser(request) {
        this.client.getUser(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    switchProfile(request) {
        this.client.switchProfile(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

    reAuthenticate(request) {
        this.client.reAuthenticate(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }


    // Datasets Endpoints
    useDataset(request) {
        this.client.useDataset(request, function(err, response) {
            if (err)
                throw err;
            console.log(response)
        });
    }

};



p = new Pennsieve()
p.getUser({})
p.switchProfile({profile : 'pennsieve-agent'})
p.listManifests({});
//p.useDataset({dataset_id : 'N:dataset:...' })
//p.createManifest({base_path : 'pennsieve.js'})
