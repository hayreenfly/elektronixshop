import express from 'express';
const router = express.Router();

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js';

import { secure } from '../middlewares/authMiddleware.js';

router.route('/').post(secure, addOrderItems);
router.route('/myorders').get(secure, getMyOrders);
router.route('/:id').get(secure, getOrderById);
router.route('/:id/pay').put(secure, updateOrderToPaid);

export default router;
