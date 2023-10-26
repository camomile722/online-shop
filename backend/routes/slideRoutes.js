import express from "express";

const router = express.Router();

import { getSlides } from "../controllers/slideController.js";

router.route("/slides").get(getSlides);

export default router;
