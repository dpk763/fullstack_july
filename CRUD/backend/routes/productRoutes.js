import express from "express";
import { authMiddle } from '../middleware/middlewareAuth.js';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin Routes
router.post("/",authMiddle, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
