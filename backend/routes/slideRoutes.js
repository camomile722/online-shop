import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();

import { getSlides } from "../controllers/slideController.js";

router.route("/slides").get(getSlides);

export default router;
