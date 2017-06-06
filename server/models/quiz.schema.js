const mongoose = require("mongoose"),
	    Schema=mongoose.Schema;


var quizSchema=new Schema({
    topic:String,
    subtopic:String,
    hostedBy:String,
    date:Date,
    startTime:Date,
    endTime:Date,
    questions:[{question:String,options:[String],correctoption:String}]
});


var quiz=mongoose.model("quiz",quizSchema);

module.exports=quiz;
