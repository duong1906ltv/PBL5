import { StatusCodes } from "http-status-codes";
import Motel from "../models/Motel.js";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import User from "../models/User.js";
import mongoose from "mongoose";

const createPost = async (req, res) => {
  const { title, category, city, district, ward, phone_number, price } =
    req.body;

  if (
    !title ||
    !category ||
    !city ||
    !ward ||
    !district ||
    !phone_number ||
    !price
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

const create_post_image = async (req, res) => {
  const { id: postId } = req.params;

  const post = await Motel.findOne({ _id: postId });
  post.image = "http://127.0.0.1:5000/images/" + req.file.filename;
  await Motel.findOneAndUpdate({ _id: postId }, post, { new: true });
  res.status(StatusCodes.OK).json("OK");
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
    const posts = await Motel.find().populate("createdBy");
    res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updatePost = async (req, res) => {
  const { id: postId } = req.params;
  const { title, category, city, district, ward, phone_number, price } =
    req.body;

  if (
    !title ||
    !category ||
    !city ||
    !ward ||
    !district ||
    !phone_number ||
    !price
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

const findPost = async (req, res) => {
  const { city, district, ward } = req.query;
  console.log(city);
  const queryObject = { city: {}, district: {}, ward: {} };
  if (city && city !== "all") {
    queryObject.city.id = city;
  }
  if (district && district !== "all") {
    queryObject.district.id = district;
  }
  if (ward && ward !== "all") {
    queryObject.ward.id = ward;
  }
  console.log(queryObject);
  let result = await Motel.find({
    queryObject,
  });

  res.status(200).json({ result });
};

export {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
  create_post_image,
  findPost,
};
