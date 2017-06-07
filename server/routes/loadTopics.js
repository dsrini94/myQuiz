const loadTopics = require('express').Router();

loadTopics.post('/loadTopics',(req,res)=>{
  res.send('buddy you got it right');
})

module.exports = loadTopics;
