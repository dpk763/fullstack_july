import express from 'express';
import { getUsers, createUser, updateUser, deleteUser, login, auth } from '../controllers/userController.js';
import { authMiddle } from '../middleware/middlewareAuth.js';
const router = express.Router();

router.get('/', getUsers);
router.post('/',createUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

router.post('/login',login);
router.get('/auth',authMiddle,auth);

export default router;