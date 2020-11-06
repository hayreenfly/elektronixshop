import express from 'express';
const router = express.Router();

import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from '../controllers/productController.js';

import { secure, admin } from '../middlewares/authMiddleware.js';

router.route('/').get(getProducts).post(secure, admin, createProduct);
router.route('/:id/reviews').post(secure, createProductReview);
router
  .route('/:id')
  .get(getProductById)
  .delete(secure, admin, deleteProduct)
  .put(secure, admin, updateProduct);

export default router;
