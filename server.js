var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);


var io = require('socket.io')(server);

io.listen(8080);

console.log("Server escuchando en 8080")

io.on('connection', function (socket) {

	socket.on('question', function (pregunta) {
		socket.emit('nuevaPregunta', pregunta);
		console.log('Nueva Pregunta %s: , Emitter: %s', pregunta.question, pregunta.emitter);

	});


	socket.on('preguntaRespondida', function (pregunta) {
	  	socket.emit('nuevaPregunta', pregunta);
	    console.log(pregunta);
	});

});
