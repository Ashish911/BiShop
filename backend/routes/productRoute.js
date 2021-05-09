import express from 'express';
const router = express.Router();
import {
  createProduct,
  createProductReview,
  deleteProductById,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct
} from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
