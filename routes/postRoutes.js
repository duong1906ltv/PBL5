import express from "express";
const router = express.Router();

import {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
} from "../controllers/postController.js";

router.route("/").post(createPost).get(getAllPosts);
router.route("/:id").delete(deletePost).patch(updatePost);

export default router;
