// Create web server with Node.js
// Run: node comments.js
// Result: http://localhost:8081/comments.html
// Description: Create a simple web server that returns the contents of a file to the client in the response. 
// The web server will listen on port 8081 of the computer and will serve up the file comments.html, 
// which should be in the same directory as the server file. 
// Run the server and view the results in a browser.

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        } 

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);

console.log("Server running at http://localhost:8081/");
