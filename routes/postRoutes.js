import express from "express";
import authenticateUser from "../middleware/auth.js";
const router = express.Router();

import {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
} from "../controllers/postController.js";

router.route("/").post(authenticateUser, createPost).get(getAllPosts);
router
  .route("/:id")
  .delete(deletePost, authenticateUser)
  .patch(authenticateUser, updatePost);

export default router;
