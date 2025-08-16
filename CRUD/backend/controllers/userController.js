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
