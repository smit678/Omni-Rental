const User = require("../model/userSchema");
const Feedback = require("../model/feedbackModel");
const Car = require("../model/cars-model")




///////////////////////////////////////
/////////     get users      //////////
///////////////////////////////////////

const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({},{password : 0});
        if(!users){
        return res.status(404).send("user not found");
       
        }
    
        return  res.status(200).send(users);
                 
    } catch (error) {
      next(error);    
    }
};





///////////////////////////////////////
/////////    get feedback    //////////
///////////////////////////////////////

const getAllFeedback = async(req,res)=>{
    try {
        const feedBack = await Feedback.find();
        if(!feedBack || feedBack === 0){
            return res.status(404).send("user not found");
            
        }
        res.status(200).send(feedBack);
    } catch (error) {
        next(error);
        
    }
};




///////////////////////////////////////
/////////  single user data  //////////
///////////////////////////////////////

const getUserById = async(req,res)=>{
    try {
        const id = req.params.id ;
       const data = await User.findOne({_id :id},{password:0});
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};





///////////////////////////////////////
/////////     delet user     //////////
///////////////////////////////////////

const dleteUserById = async(req,res)=>{
    try {
        const id = req.params.id ;
        await User.findByIdAndDelete(id);
        return res.status(200).send("user deleted");
    } catch (error) {
        next(error);
    }
};


///////////////////////////////////////
/////////     delet feedback     //////////
///////////////////////////////////////

const dleteFeedbackById = async(req,res)=>{
    try {
        const id = req.params.id ;
        await Feedback.findByIdAndDelete(id);
        return res.status(200).send("feedback deleted");
    } catch (error) {
        next(error);
    }
};




///////////////////////////////////////
/////////    update user     //////////
///////////////////////////////////////

const updateUserById = async(req,res)=>{
    try {
        const id = req.params.id ;
        const updatedUserData = req.body;
       console.log(updatedUserData);
       
        const updatedData = await User.updateOne({_id : id},{
          $set: updatedUserData
        });
        return res.status(200).json({updatedData});
    } catch (error) {
        console.log(error);
        
    }
};


///////////////////////////////////////
/////////    get All Cars    //////////
///////////////////////////////////////

const getAllCars = async(req,res) => {
    try {
        const cars = await Car.find({});
        if(!Car){
        return res.status(404).send("car not found");
       
        }
    
        return  res.status(200).send(cars);
    } catch (error) {
        console.log(error);
        
    }
}



///////////////////////////////////////
/////////  single car data   //////////
///////////////////////////////////////


const getSingleCar = async(req,res)=>{
    try {
        const id = req.params.id ;
       const singleCar = await Car.findOne({_id :id});
        return res.status(200).send(singleCar);
    } catch (error) {
        next(error);
    }
};




///////////////////////////////////////
/////////    update cars     //////////
///////////////////////////////////////

const updateCarById = async(req,res)=>{
    try {
        const id = req.params.id ;
        const updatedCarData = req.body;
       console.log(updatedCarData);
       
        const updatedData = await Car.updateOne({_id : id},{
          $set: updatedCarData
        });
        return res.status(200).json({updatedData});
    } catch (error) {
        console.log(error);
        
    }
};




///////////////////////////////////////
/////////     delet car      //////////
///////////////////////////////////////

const dleteCarById = async(req,res)=>{
    try {
        const id = req.params.id ;
        await Car.findByIdAndDelete(id);
        return res.status(200).send("Car deleted");
    } catch (error) {
        next(error);
    }
};

module.exports = {getAllUsers, getAllFeedback, dleteUserById, getUserById, dleteFeedbackById, updateUserById, getAllCars, getSingleCar, updateCarById, dleteCarById};
