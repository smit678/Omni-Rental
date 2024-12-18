require("dotenv").config();
const User = require("../model/userSchema");
const feedback = require("../model/feedbackModel")
const nodemailer = require("nodemailer");

// feedback aknowlagedment send to users email
const transporter = nodemailer.createTransport({
  service: "gmail" ,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  }
});

// const bcrypt = require("bcryptjs")

// home page
const home = async (req,res)=>{
    try {
        await res.status(200).json({msg:"welcome to home page"});
    } catch (error) {
        console.log(error);
        
    }
};

// register page
const register = async (req,res)=>{
    try {
        const{name, email, phone, password} = req.body ;
// if user exist :-        
        const userExist = await User.findOne({email});
        if (userExist){
           
            return res.status(400).json({message:"email alredy exists"});
        } 
        
// send mail
let mailOption = {
    from : process.env.SMTP_MAIL,
    to : email,
    subject : "Registration",
    html :  `<h3>thank you for Registration</h3>
             <p>Hello, ${name} Wellcome to Omni car rental service</p>` ,
  };

  transporter.sendMail(mailOption,function(error, info){
      if(error){
          console.log(error);
        }else{
            console.log("email send succsessfully",info.messageId);
            
        }
    });



// create data        
       const userCreated = await User.create({name, email, phone, password})

        res.status(201).json(
            {
             value:"ok",
             token:await userCreated.generateToken(),
            
            }
        );
        
    } catch (error) {
        next(error);
        
    } 
};

//login page

const login = async (req,res)=>{
try {
    const {email, password} = req.body;

    const userExist = await User.findOne({email});

    if(!userExist){
        return res.status(400).json({message:"invalid User,pls Register first !"});
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    //send email
let mailOption = {
    from : process.env.SMTP_MAIL,
    to : email,
    subject : "Registration",
    html :  `<h3>Wallcom Back,${userExist.name}</h3>
             <p>Hello, ${userExist.name} Wellcome Back to Omni car rental service</p>` ,
  };

  transporter.sendMail(mailOption,function(error, info){
      if(error){
          console.log(error);
        }else{
            console.log("email send succsessfully",info.messageId);
            
        }
    });

//user exist or not
    if(user){
        res.status(200).json({
            msg:"login Successful",
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
        });
    }else{
        return res.status(401).send("invalid email or password");
    }
} catch (error) {
    next(error); 
}
};





// feedback page
const feedbackForm = async (req,res)=>{
    try {
    
        const responce = req.body;
        let mailOption = {
            from : process.env.SMTP_MAIL,
            to : responce.email,
            subject : "feedback",
            html :  `<h3>thank you for giving feedback</h3>
                     <p>"${responce.message}"</p>` ,
          };

          transporter.sendMail(mailOption,function(error, info){
              if(error){
                  console.log(error);
                }else{
                    console.log("email send succsessfully",info.messageId);
                    
                }
            });
            await feedback.create(responce);
        return res.status(200).json({msg:"feedback send successfully",responce});
    
    } catch (error) {
        console.log(error);
        
    } 
};


//send data user-logic for auth.jsx
const user = async (req, res)=>{
    try {
        const userData = await req.user;
        //console.log(userData);
    return res.status(200).json({userData})  //userData msg:"hii"
    } catch (error) {
        console.log(`error from the user route ${error}`);
        
    }
};

module.exports = { home, register, feedbackForm, login, user};