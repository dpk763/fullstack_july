import User from '../models/User.js';
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
 const user = await User.create({ name, email, password });
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