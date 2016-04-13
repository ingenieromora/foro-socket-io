var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);


var io = require('socket.io')(server);

io.listen(8080);

console.log("Server escuchando en 8080")

io.on('connection', function (socket) {
  socket.on('question', function (data) {
  	socket.emit('serverHabla', { hello: 'world' });
    console.log(data);
  });
});

io.on('question', function (pregunta) {
	console.log(pregunta)
});