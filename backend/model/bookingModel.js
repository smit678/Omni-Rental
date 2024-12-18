const mongoose = require("mongoose");




const bookingSchema = mongoose.Schema({  
    


        order_id:{
            type:String,
            required:true,},
        u_id:{
            type:String,
            required:true,},    
        email:{
            type:String,
            require:true,
        },
        car_id:{
            type:String,
            require:true,
        },
        todate:{
            type:String,
            require:true,
        },
        fromdate:{
            type:String,
            require:true,
        },
        
    

});


const Booking = mongoose.model("booking",bookingSchema);

module.exports = Booking;