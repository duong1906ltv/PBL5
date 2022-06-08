import express from "express";
const router = express.Router();

import { getMessage, addMessage } from "../controllers/messageController.js";

router.route("/").post(addMessage);
router.route("/:conversationId").get(getMessage);

export default router;
