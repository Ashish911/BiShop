import express from 'express';
const router = express.Router();
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProduct
} from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct);

export default router;
