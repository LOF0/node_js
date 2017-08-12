let http = require('http');
let fs = require('fs');

let server = http.createServer();
server.on('request', function(request, response){
    fs = fs.readFile('projet.html', function(err, data) {
	if (err) {
	    response.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
	    response.end("Ce fichier n'existe pas");
	}
	else {
	    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	    response.end(data);
	}
    });
});

server.listen(8080);
	  
