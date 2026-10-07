import jwt from "jsonwebtoken";

const protect = async (req,res,next) =>{
    const token = req.header.authorization;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized access",
            
        });
    }
    try{

        const decoded = jwt.verify(token,process.env.JWT_KEY)
        req.userId = decoded.userId;
        next()

    }catch(error){
        return res.status(401).json({
            message:"Unauthorized "
        })
    }
}

export default protect;