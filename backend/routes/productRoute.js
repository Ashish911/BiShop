import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/product.js';

// Get all Products '/api/products/' GET Request
// Public Route
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// Get Product by Id '/api/products/:id' GET Request
// Public Route
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product Not Found');
    }
  })
);

export default router;
