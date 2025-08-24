import jwt from 'jsonwebtoken';

export const authMiddle = async (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ msg: "No token provider"});
    }
    try{
      const token = authHeader.split(' ')[1];
      
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        req.user._id=decoded.id;
        next();
    }
    catch(err){
      return res.status(403).json({msg:"Invalid token"})
    }
}