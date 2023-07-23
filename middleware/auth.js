const jwt = require("jsonwebtoken");
require('dotenv').config();


const auth = async (req,res,next) =>{
    const token = req.header('jwt-token')
    if(!token){
        return res.status(401).json("Authorization Denied")
    }
    try {
        const decoded = jwt.verify(token,process.env.secretKey);
        req.user = decoded.user;
        next()
    } catch (error) {
        console.error(error.message)
        res.status(401).json({msg:"Token is invalid"});
    }
}

module.exports = auth