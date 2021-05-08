import asyncHandler from 'express-async-handler';
import Product from '../models/product.js';

// Get all Products '/api/products/' GET Request
// Public Route
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get Product by Id '/api/products/:id' GET Request
// Public Route
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product Not Found');
  }
});

// Delete product by id '/api/product/:id' DELETE Request
// Private/Admin Route
const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({
      message: 'Product Removed'
    });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, deleteProductById };
