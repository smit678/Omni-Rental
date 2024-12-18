const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});

// secure the password by bcrypt
userSchema.pre('save', async function(next){
  
    const user = this;

    if(!user.isModified('password')){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password; 
    } catch (error) {
        next(error);
    }
});
// compare password
userSchema.methods.comparePassword = async function(password){
   return bcrypt.compare(password, this.password);
};

//JWT

userSchema.methods.generateToken = async function() {
    try {
       return jwt.sign({
        email: this.email,
        isAdmin: this.isAdmin,
       },
       process.env.JWT_SECRET_KEY,
       {
        expiresIn:"1d",

       }
    ); 
    } catch (error) {
        console.error(error);
        
    }
};

const User = mongoose.model("User",userSchema);

module.exports = User ;