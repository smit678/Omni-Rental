require("dotenv").config();
const Car = require("../model/cars-model");
const Booking = require("../model/bookingModel");
const nodemailer = require("nodemailer");
//onst User = require("../model/userSchema");






const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    }
  });




const cars = async(req, res)=>{
   try {
    const list = await Car.find();
    if(!list){

        res.status(404).json({msg: "no cars found"});
        return;
    }
    res.status(200).json( list );
   } catch (error) {
    next(error);
    
   }
};

//get single car data
const info = async(req,res)=>{
    try {
        const id = req.params.id;
        const singleCar = await Car.findOne({ _id : id });
        return res.status(200).json(singleCar);
    } catch (error) {
        console.log(error)
    }
};


//booking
const booking = async(req,res)=>{
    try {
        const id = req.params.id;
        const { order_id ,u_id ,name,email ,todate ,fromdate } = req.body ;
       

      //  const user = await User.findOne({ email })
        // console.log("it is back",user.email);
        //const u_email = user.email ;

        const singleCar = await Car.findOne({_id : id});
       const car_id = singleCar._id
       const car_name = singleCar.name
    //    const user = User.findOne({_id : u_id})
        const bookingCreated = await Booking.create({ order_id,u_id ,email ,car_id ,todate ,fromdate})

        let mailOption = {
            from : process.env.SMTP_MAIL,
            to : email,
            subject : "Order confirmation",
            html :  `<h3>Order Summery</h3>
            <p>Hello, ${name} Your Car is Booked</p>
            <p>Order Id : ${bookingCreated.order_id}</p>
            <p>Car Name: ${car_name}</p>
            <p>Date :${bookingCreated.todate} TO ${bookingCreated.fromdate}</p> ` 
        };
        
        transporter.sendMail(mailOption,function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log("email send succsessfully",info.messageId);
                
            }
        });
        return res.status(200).json({msg:"hoo gyi car book"});
    } catch (error) {
        console.log(error,"error ave 6e");
        
    }
};


//single order
const order = async (req,res)=>{
   
    
    try {
        const id = req.params.id ;
        const list = await Booking.findOne({order_id : id});
        if(!list){
            res.status(404).send("no order found")
            return;
        }
        res.status(200).send( list );
      } catch (error) {
        console.log(error);
        
      }
    

};

module.exports={cars , info , booking , order};