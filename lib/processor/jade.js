module.exports = makeJade;
var jade= require('jade');
var fs=require('fs');
var path=require('path');
function makeJade(root){
	return function(req, res, next){
		var extname=path.extname(req.url);
		if(extname== '.html'){
			var jadeFile=root+'/'+path.basename(req.url, '.html')+'.jade';
			fs.readFile(jadeFile,{encoding:"utf8"},function(err, data){
				if(err){
					res.statusCode=404;
					res.end();
				}
				else{
					jade.render(data, function(err, html){
						if(err) throw err;
						res.writeHead(200, {
							'Content-Length':html.length,
							'Content-type':'text/html; charset=UTF-8'
						});
						res.end(html);
					});


				}
			});
		}
		else{
			next();
		}



	};



	
}