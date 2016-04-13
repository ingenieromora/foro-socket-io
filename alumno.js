var app = require('express')();
var http = require('http');
var io = require('socket.io-client');;

console.log("Alumno preguntando...")

var availableQuestions = [ { question:'que hora es?', emitter:'kova'}, { question: 'que dia es hoy?', emitter:'tomi'}, {question:'Quien soy?', emmiter:'Alan'}];

//SyncedQuestionsOfList
var questionsList = {};


var socket = io.connect('http://localhost:8080');

socket.emit("question", availableQuestions[0]);

socket.on('question', function (preguntaRecibida) {
  console.log(preguntaRecibida);
  socket.emit('my other event', { my: 'data' });
});



// var bodyParser = require('body-parser')


// app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// })); 


// var options = {
// 	host: 'http://localhost',
//     port: 8080,
//     path: '/question',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

//var socket = io(options.host);

// var server = app.listen(3001, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Server listening at http://%s:%s', host, port);
// });



// socket.on('question', function (data) {
//  	questionsList = data;
//  	console.log(data);
// });

// setInterval(function(){

// socket.emit('question', availableQuestions[3]);

// }, 1000); 
