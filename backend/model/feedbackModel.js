//hear we define Schema and model without exporting mongoose 
//by dstrucuring

const{Schema, model} = require("mongoose");


const feedbackSchema = Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        require: true,
    },
});

//create model

const feedBack = model("Feedback",feedbackSchema);

module.exports = feedBack;