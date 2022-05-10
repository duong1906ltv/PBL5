import { StatusCodes } from "http-status-codes";
import Motel from "../models/Motel.js";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

const createPost = async (req, res) => {
  const { title, category, city, district, ward, phone_number, rent_price } =
    req.body;

  if (
    !title ||
    !category ||
    !city ||
    !ward ||
    !district ||
    !phone_number ||
    !rent_price
  ) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;

  try {
    let post = await Motel.create(req.body);
    res.status(StatusCodes.OK).json({ post });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("SOME THING WENT WRONG");
  }
};
const deletePost = async (req, res) => {
  const { id: postId } = req.params;

  const post = await Motel.findOne({ _id: postId });

  if (!post) {
    throw new NotFoundError(`No post with id :${postId}`);
  }

  checkPermissions(req.user, post.createdBy);

  await post.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};
const getAllPosts = async (req, res) => {
  try {
    const Posts = await Motel.find();
    console.log(Posts.user);
    res.status(StatusCodes.OK).json(Posts);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("SOME THING WENT WRONG");
  }
};
const updatePost = async (req, res) => {
  const { id: postId } = req.params;
  const { title, category, city, district, ward, phone_number, rent_price } =
    req.body;

  if (
    !title ||
    !category ||
    !city ||
    !ward ||
    !district ||
    !phone_number ||
    !rent_price
  ) {
    throw new BadRequestError("Please provide all values");
  }

  const post = await Motel.findOne({ _id: postId });

  if (!post) {
    throw new NotFoundError(`No post with id :${postId}`);
  }

  checkPermissions(req.user, post.createdBy);

  const updatedPost = await Motel.findOneAndUpdate({ _id: postId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedPost });
};

export { createPost, deletePost, getAllPosts, updatePost };
