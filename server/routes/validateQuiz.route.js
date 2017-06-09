const validate = require('express').Router()
    , QuizSchema = require('./../models/quiz.schema.js')
    ,neodb = require('./../connections/db.neo4j.js');

validate.post("/validate",function(req,res){
  var marks=0;
  var totalRightQues=0;
  console.log(req.body.uid);
  //fetches the correctoption from database to validate
  QuizSchema.find({'topic':req.body.topic,'subtopic':req.body.subtopic, 'date':req.body.date},function(err,reply){
    reply[0].questions.map(function(question,i){
      if(question.correctoption==req.body.selected[i]){
        marks++;
        totalRightQues++;
      }
    });
    var result={
      marks : marks
    };
    //match the user id in neo4j db
    neodb.cypher({
      query:"match (id:users {userId:{adid}}) return id",
      params:{
        adid:req.body.uid,
        score:marks
      }
    },function(err,result){
        if (err) {
          console.log('error from fetching mark - > ',err);
        }
        var score = result[0].id.properties.totalScore
        //update the totalScore for the user id in neo4j db
        neodb.cypher({query:"match (id:users {userId:{adid}}) set id.totalScore={score} return id",
        params:{
          adid:req.body.uid,
          score:marks + score,
        }},function(err,result){
          if (err) {
            console.log('error in update score neo4j - > ',err);
          }
          var resultObj = {
            quizScore : marks,
            totalScore : result[0].id.properties.totalScore,
            totalRightQues : totalRightQues,
            img : result[0].id.properties.image
          };
          console.log('result- > ',resultObj);
          res.send(JSON.stringify(resultObj));
        });
    }); //neo4j query ends
  }); //mongoDB query ends
});

module.exports = validate;
