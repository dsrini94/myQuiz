const launchQuiz = require('express').Router();
const QuizSchema = require('./../models/quiz.schema.js');


//Post the quiz into MongoDB ---------->
launchQuiz.post('/saveLaunchQuiz', function(req, res){
  var topic = req.body.topic
    , subtopic = req.body.subtopic
    , hostedBy = 'ru353746'
    , startDate = req.body.startDate
    , startTime = req.body.startTime
    , endTime = req.body.endTime
    , questions = req.body.questions;
  console.log(questions);
  questions.map(function(item,i){
    item.options = shuffle(item.options);
  });
  var obj = {
    topic:topic,
    subtopic:subtopic,
    hostedBy:hostedBy,
    date:startDate,
    startTime:startTime,
    endTime:endTime,
    questions:questions
  }
  console.log(questions);
  QuizSchema.update({topic:topic,subtopic:subtopic,hostedBy:hostedBy},
                    {$set:{topic:topic,
                            subtopic:subtopic,
                            hostedBy:hostedBy,
                            date:startDate,
                            startTime:startTime,
                            endTime:endTime,
                            questions:questions}},
                    {upsert:true}, function(err, reply){
    if (err) {
      console.log('Oops! Error in saving quiz to DB', err);
    } else {
      console.log('Quiz saved to DB', reply);
    }
  });
});


// function to shuffle the option order ---------->
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = launchQuiz;
