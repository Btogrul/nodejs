var http = require('http');
const {myDateTime} = require("./sysMain");
var calc = require("./module")

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("boom " + calc.calculate() + " ");
    res.end();
    // res.end('Hello World!');

}).listen(8080);
//---------------------------------------------------------




//The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
//
// This object has a property called "url" which holds the part of the url that comes after the domain name:

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8082);

//-----------------------------------

// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(8081);

//------------------------------------










console.log('first step' + " " + myDateTime() );