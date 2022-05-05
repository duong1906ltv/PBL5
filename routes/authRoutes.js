import express from "express";
const router = express.Router();

import {
  register,
  login,
  updateUser,
  reset_password_email,
  reset_password,
} from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").post(updateUser);
router.route("/reset-password-email").post(reset_password_email);
router.route("/reset-password").post(reset_password);

export default router;
