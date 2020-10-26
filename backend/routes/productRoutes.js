import express from 'express';

// middleware for handling exceptions inside async express routes and passing them to express error handlers
import asyncHandler from 'express-async-handler';

const router = express.Router();

import Product from '../models/productModel.js';

//**************************************
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
//**************************************
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//**************************************
// @desc    Fetch product
// @route   GET /api/products/:id
// @access  Public
//**************************************
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
