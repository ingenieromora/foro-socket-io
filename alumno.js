var app = require('express')();
var http = require('http');
var io = require('socket.io-client');;

console.log("Alumno preguntando...")

var availableQuestions = [ { question:'que hora es?', emitter:'kova'}, { question: 'que dia es hoy?', emitter:'tomi'}, {question:'Quien soy?', emmiter:'Alan'}];

//SyncedQuestionsOfList
var questionsList = {};


var socket = io.connect('http://localhost:8080');

socket.emit("question", availableQuestions[0]);

socket.on('nuevaPregunta', function (preguntaRecibida) {
  console.log(preguntaRecibida);
});