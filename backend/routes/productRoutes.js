import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

router.route("/products").get(getProducts);

router.route("/products/:id").get(getProductById);

export default router;
