const User = require("../model/userSchema");

const users = async (req,res)=>{
  try {
    const list = await User.find();
    if(!list){
        res.status(404).send("no user found")
        return;
    }
    res.status(200).send( list );
  } catch (error) {
    console.log(error);
    
  }
};

module.exports = { users }