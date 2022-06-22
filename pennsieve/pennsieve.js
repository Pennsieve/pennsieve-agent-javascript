//var PROTO_PATH = __dirname + '/../../../protos/route_guide.proto';
//import {userProfile} from './userProfile.js'
var PROTO_PATH = './protos/agent.proto'
var async = require('async');
var fs = require('fs');
var parseArgs = require('minimist');
var path = require('path');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

/*
class Pennsieve {
  constructor(target){
    var packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {keepCase: true,
         longs: String,
         enums: String,
         defaults: true,
         oneofs: true
        });
    var routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;
    this.stub = new routeguide.RouteGuide(target, grpc.credentials.createInsecure());
    this.api = this;
    //this.manifest = Manifest(this.stub);
    this.user = UserProfile(this.stub);


  }

  getUser() {
  return this.user.whoami();
}
}


//create object in a driver function... pennsieve = new Pennsieve(target='localhost:9000');
*/
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;
var stub = new routeguide.RouteGuide('localhost:9000', grpc.credentials.createInsecure());

//request=
//... //import it from GetUserRequest.js
stub.proto.protos.GetUser(request={})
