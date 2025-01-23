const mongoose = require("mongoose");
////"mongodb://localhost:27017/test"
const dbConnect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://vasavasmit2004:smit2401@cluster1.4jbig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
        .then(()=>{console.log("db connect");
        })
    } catch (error) {

        console.log(error);
        
    }
};

module.exports = dbConnect ;