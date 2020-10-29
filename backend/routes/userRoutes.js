import express from 'express';
const router = express.Router();

import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js';
import { secure } from '../middlewares/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(secure, getUserProfile);

export default router;
