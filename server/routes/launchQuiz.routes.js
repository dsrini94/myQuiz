const launchQuiz = require('express').Router();
const QuizSchema = require('./../models/quiz.schema.js');
const MonDB = require('./../connections/db.mongo.js');


//Post the quiz into MongoDB ---------->
launchQuiz.post('/saveLaunchQuiz', function(req, res){
  console.log('lQ', req.body);
});
