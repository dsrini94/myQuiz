//import Statements
const expressInstance = require('express');
const myQuizServer = expressInstance();


//loading the static file
myQuizServer.use(expressInstance.static('./../'));

//Server will be live on port 3000
myQuizServer.listen(3000,()=>{
  console.log('myQuizServer is on');
})
