import express from "express";

const router = express.Router();
import {
  getUsers,
  getUserById,
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getUsers);

router.post("/login", authUser);

router.route("/register").post(registerUser);

router.route("/logout").post(logoutUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
