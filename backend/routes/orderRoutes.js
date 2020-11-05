import express from 'express';
const router = express.Router();

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';

import { secure, admin } from '../middlewares/authMiddleware.js';

router.route('/').get(secure, admin, getOrders).post(secure, addOrderItems);
router.route('/myorders').get(secure, getMyOrders);
router.route('/:id').get(secure, getOrderById);
router.route('/:id/pay').put(secure, updateOrderToPaid);
router.route('/:id/deliver').put(secure, updateOrderToDelivered);

export default router;
