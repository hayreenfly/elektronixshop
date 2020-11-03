import express from 'express';
const router = express.Router();

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} from '../controllers/userController.js';
import { secure, admin } from '../middlewares/authMiddleware.js';

router.route('/').get(secure, admin, getUsers).post(registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(secure, getUserProfile)
  .put(secure, updateUserProfile);

export default router;
