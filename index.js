function createMiniHarp(port){
	var connect = require("connect")
    var app = connect();
	console.log("Starting mini-harp on http://localhost: "+port);
	app.listen(port);
}	

module.exports=createMiniHarp;