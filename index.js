var serveStatic = require('serve-static');
var makeJade=require('./lib/processor/jade');
function createMiniHarp(port, root){
	var connect = require("connect")
    var app = connect();
	console.log("Starting mini-harp on http://localhost: "+port);
	app.use(function(req,res,next){
		if(req.url==="/current-time"){
			res.end((new Date()).toISOString());
		}
		else{
			next();
		}


	})

	app.use(serveStatic(root))
	app.use(makeJade(root))
	app.listen(port);
}	

module.exports=createMiniHarp;