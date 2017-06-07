const events = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js');

//Retrieving the events from quiz data in db
events.get('/events', function(req, res){
  var a = {
    eventsArr : []
  };
  QuizSchema.find({}, function(err, reply){
    if (err) {
      // console.log('Error in Retrieving the events in {events.route.js} ',err);
    } else {
      // console.log('Events retrieved successfully in {events.route.js} ',reply);
    }
    a = {
      eventsArr : eventSegregation(reply)
    }
    res.send(a);
  });
});

// This function segregate the object of needed values ---------->
function eventSegregation(val){
  var current = new Date();
  var eArr = [];
  val.map(function(item, i){
    if(item.date>=current){
      obj = {
        date : item.date,
        topic : item.topic,
        subtopic : item.subtopic,
        topicImgURL : item.topicImgURL
      };
      eArr.push(obj);
    }
  })
  return eArr;
}

module.exports = events;
