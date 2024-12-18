const adminMiddleware = async (req, res, next) =>{
    try {
        //console.log(req.user);
        const admin = req.user.isAdmin;
        if(!admin){
            return res.status(403).send("Access denied. User is not an Admin");
        }
        next()
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;