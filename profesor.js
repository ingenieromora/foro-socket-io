var app = require('express')();
var http = require('http');
var io = require('socket.io-client');;

console.log("Profesor Ingresando al foro...")

var questionsList = {};


var socket = io.connect('http://localhost:8080');

socket.on('nuevaPregunta', function (preguntaRecibida) {
  
  console.log("Pregunta Recibida %s:", preguntaRecibida);

  questionsList.push(preguntaRecibida)

});


if(questionsList.lenght == 0){
	socket.emit('respuestas', questionsList[0])
}


socket.on('preguntaRespondida', function (preguntaRespondida) {
  console.log("Pregunta Respondida %s:", preguntaRecibida);

  questionsList.pop(preguntaRecibida)

});

