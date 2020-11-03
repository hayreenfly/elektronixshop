import express from 'express';
const router = express.Router();

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { secure, admin } from '../middlewares/authMiddleware.js';

router.route('/').get(secure, admin, getUsers).post(registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(secure, getUserProfile)
  .put(secure, updateUserProfile);
router
  .route('/:id')
  .get(secure, admin, getUserById)
  .put(secure, admin, updateUser)
  .delete(secure, admin, deleteUser);

export default router;
