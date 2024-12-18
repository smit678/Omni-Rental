const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const jwtkey = process.env.JWT_SECRET_KEY ;


const authMiddleware = async(req,res,next) => {

const token = req.header("Authorization");

if(!token){
    return res.status(401).send("http,token not provided");
}
// console.log("token from auth-midd",token);

const jwtToken = token.replace("Bearer","").trim();
//console.log("token from auth-midd",jwtToken);

try {
    const isVerified = jwt.verify(jwtToken,jwtkey);
    
    const userData = await User.findOne({email : isVerified.email},{password:0})
     //console.log(userData);
    
     req.user = userData;
     req.token = token;
     req.userId = userData._id;
    
    
    next();
} catch (error) {
    return res.status(401).send("Unauthorized,invalid token");
}
};

module.exports = authMiddleware;