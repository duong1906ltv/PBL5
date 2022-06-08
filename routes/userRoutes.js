import express from "express";
const router = express.Router();

import { getUserById } from "../controllers/userController.js";

router.route("/").get(getUserById);

export default router;
