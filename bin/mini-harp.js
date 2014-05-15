#! /usr/bin/env node
var createMiniHarp = require("../index");
var argv=require('minimist')(process.argv.slice(2));
var port= argv.port || 4000;
var root=argv._[0] || process.cwd();
var app=createMiniHarp(root);
if(argv.port){
	app.listen(argv.port);
	console.log('Starting mini-harp on http://localhost:'+argv.port);
}
else{
	app.listen(4000);
	console.log('Starting mini-harp on http://localhost:4000');
}