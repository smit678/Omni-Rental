// const jwt = require("jsonwebtoken");
// const User = require("../model/userSchema");

// const authMiddleware = async(req,res,next)=>{

//   const token = await req.header("Authorization");

//   if(!token){
//     return res
//     .status(401)
//     .json({massge: "Unauthorized HTTP, token not provided"})
//   }
//   const jwtToken = token.replace("Bearer","").trim();
//   console.log('token from',jwtToken);

//   try {
//     const isVerified = jwt.varify(jwtToken, process.env.JWT_SECRET_KEY);
//     console.log(isVerified);

//     const userData = await User.findOne({email:isVerified.email})
// .select({
//     password: 0,
// });
// console.log(userData);

// req.User = userData;
// req.token = token;
// req.userID = userData._id
    
//     next();
//   } catch (error) {
//     return res.status(401).json({massge: "Unauthorized, invalid token"});
//   }

//  };


// module.exports =  authMiddleware  ;


const jwt = require("jsonwebtoken");

const authMiddleware = async (req,res,next)=>{
  const token = req.header("Authorization");
  if (!token){
    return res.status(401)
    .json({massage:"Unauthorized HTTP ,Token not provided"});
  }
console.log(token);
next();


};

module.exports = authMiddleware;