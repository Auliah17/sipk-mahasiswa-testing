import express from "express";

import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/UserController.js";

import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.get("/profile", verifyToken, getProfile);

router.put("/profile", verifyToken, updateProfile);
router.put("/change-password", verifyToken, changePassword);

export default router;