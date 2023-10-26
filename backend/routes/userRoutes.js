import express from "express";

const router = express.Router();
import { getUsers, getUserById } from "../controllers/userController.js";

router.route("/users").get(getUsers);

router.route("/users/:id").get(getUserById);

export default router;
