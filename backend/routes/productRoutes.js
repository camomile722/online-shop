import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import Slide from "../models/slideModel.js";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
import { getSlides } from "../controllers/slideController.js";

router.route("/products").get(getProducts);

router.route("/products/:id").get(getProductById);

router.route("/slides").get(getSlides);

export default router;
