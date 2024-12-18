const mongoose = require("mongoose");

const dbConnect = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/test")
        .then(()=>{console.log("db connect");
        })
    } catch (error) {

        console.log(error);
        
    }
};

module.exports = dbConnect ;