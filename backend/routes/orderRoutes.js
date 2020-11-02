import express from 'express';
const router = express.Router();

import { addOrderItems, getOrderById } from '../controllers/orderController.js';

import { secure } from '../middlewares/authMiddleware.js';

router.route('/').post(secure, addOrderItems);
router.route('/:id').get(secure, getOrderById);

export default router;
