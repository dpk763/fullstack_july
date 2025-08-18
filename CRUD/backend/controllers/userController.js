import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const getUsers = async (req, res) => {
 try {
 const users = await User.find();
 res.json(users);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
};


// Create new user
export const createUser = async (req, res) => {
 const { name, email, password } = req.body;
const hashPassword = await bcrypt.hash(password,10);
 const user = await User.create({ name, email, password : hashPassword });
 res.status(201).json(user);
};

export const updateUser = async (req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);

        if(!user) return res.status(404).json({ error: 'User not found' });

        res.send("user updated!");
    }catch(err){
        res.status(400).json({ error: 'Update failed' });
    }
}

export const deleteUser = async (req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user) return res.status(404).json({ error: 'User not found' });

        res.send("user deleted!");
    }catch(err){
        res.status(400).json({ error: 'Update failed' });
    }
}

export const login = async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(401).json({msg:"user not found"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({msg:"invalid data"});

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})

    res.json(token);

}

export const auth = async (req,res)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ msg: "No token provider"});
    }
    try{
      const token = authHeader.split(' ')[1];
      
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      res.json({msg:'protected data',id:user._id,name:user.name,email:user.email});
    }
    catch(err){
      return res.status(403).json({msg:"Invalid token"})
    }
  }