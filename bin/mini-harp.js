#! /usr/bin/env node
var createMiniHarp = require("../index");
var args=require('minimist')(process.argv.slice(2));
var port= args.port || 4000;
createMiniHarp(port);