import express from "express";
const router = express.Router();
import authenticateUser from "../middleware/auth.js";

import { getUserById, changeProfile } from "../controllers/userController.js";

router.route("/").get(getUserById);
router.route("/changeProfile").patch(authenticateUser, changeProfile);

export default router;
