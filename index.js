var serveStatic = require('serve-static');
var makeJade=require('./lib/processor/jade');
var makeLess=require('./lib/processor/less');
var path=require('path');
function createMiniHarp(root){
	var connect = require("connect")
    var app = connect();
	
	app.use(function(req,res,next){
		if(req.url=='/'){
			req.url='/index.html';
		}


		if(req.url==="/current-time"){
			res.end((new Date()).toISOString());
		}
		else{
			next();
		}


	})
	app.use(function(req, res,next){
		var extname=path.extname(req.url);
		if(extname=='.jade' || extname==='.less'){
			res.statusCode=404;
			
		}
		next();
	})

	app.use(serveStatic(root))
	app.use(makeJade(root))
	app.use(makeLess(root))
	return app;
}	

module.exports=createMiniHarp;