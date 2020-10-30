import express from 'express';
const router = express.Router();

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { secure } from '../middlewares/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(secure, getUserProfile)
  .put(secure, updateUserProfile);

export default router;
