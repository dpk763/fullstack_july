import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
const router = express.Router();

router.get('/', getUsers);
router.post('/',createUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

export default router;