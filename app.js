var express = require('express','lodash');
var app = express();



var newQuestion = function(question, emitter, answer) {
return {'id': id, 'question': question, 'answer': answer, 'emitter': emitter};
}

var questions = [];


app.get('/', function (req, res) {
 res.send('Hello World!');
});

app.post('/question', function (req, res) {
questions.push(req.question);
res.send(200);
});

app.get('/answer', function (req, res) {
questions.
});

var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;

 console.log('Server listening at http://%s:%s', host, port);
});
