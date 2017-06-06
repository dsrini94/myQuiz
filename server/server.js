//import Statements
const expressInstance = require('express');
const myQuizServer = expressInstance();
const bodyParser = require('body-parser');
const MonDB = require('./../connections/db.mongo.js');

//routers --->
const authenticate = require('./routes/authentication.js');
const launchQuiz = require('./routes/launchQuiz.routes.js');

//MongoDB Connection ---------->
MonDB.on('error', console.error.bind(console, 'connection error:'));
MonDB.once('open', function() {
    // we're connected!
});

//request parsers
myQuizServer.use(bodyParser.json());
myQuizServer.use(bodyParser.urlencoded({
  extended: true
}));

//loading the static file
myQuizServer.use(expressInstance.static('./../'));

//routes
myQuizServer.use('/',(req,res,next)=>{
  console.log('in the routes');
  next();
},authenticate, launchQuiz);

//Server will be live on port 3000
myQuizServer.listen(3000,()=>{
  console.log('myQuizServer is on');
});
