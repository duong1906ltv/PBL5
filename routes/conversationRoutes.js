import express from "express";
const router = express.Router();

import {
  getConversationFromUser,
  addNewConversation,
  getConversationFromTwoUser,
} from "../controllers/conversationController.js";

router.route("/").post(addNewConversation);
router.route("/:userId").get(getConversationFromUser);
router
  .route("/find/:firstUserId/:secondUserId")
  .get(getConversationFromTwoUser);

export default router;
