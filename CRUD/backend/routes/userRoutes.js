import express from 'express';
import { getUsers, createUser, updateUser, deleteUser, login, auth } from '../controllers/userController.js';
const router = express.Router();

router.get('/', getUsers);
router.post('/',createUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

router.post('/login',login);
router.get('/auth',auth);

export default router;