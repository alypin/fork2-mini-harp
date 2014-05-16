module.exports = makeLess;
var less= require('less');
var fs=require('fs');
var path=require('path');
function makeLess(root){
	return function(req, res, next){
		var extname=path.extname(req.url);
		if(extname== '.css'){
			var lessFile=root+'/'+path.basename(req.url, '.css')+'.less';
			fs.readFile(lessFile,{encoding:"utf8"},function(err, data){
				if(err){
					res.statusCode=404;
					res.end();
				}
				else{
					less.render(data, function(err, css){
						if(err) throw err;
						res.writeHead(200, {
							'Content-Length':css.length,
							'Content-type':'text/css; charset=UTF-8'
						});
						res.end(css);
					});


				}
			});
		}
		else{
			next();
		}



	};



	
}