import express from "express";
import authenticateUser from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

import {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
  create_post_image,
} from "../controllers/postController.js";

router.route("/").post(authenticateUser, createPost);
router
  .route("/saveImage/:id")
  .patch(upload.single("image"), authenticateUser, create_post_image);
router.route("/").get(getAllPosts);
router
  .route("/:id")
  .delete(deletePost, authenticateUser)
  .patch(authenticateUser, updatePost);

export default router;
