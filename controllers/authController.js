import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import randtoken from "rand-token";
import nodemailer from "nodemailer";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};
const updateUser = (req, res) => {
  res.send("update user");
};

function sendEmail(email, token, subject, html) {
  var email = email;
  var token = token;

  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your email id
      pass: process.env.PASSWORD, // Your password
    },
  });

  var mailOptions = {
    from: "duong1906ltv@gmail.com",
    to: email,
    subject: subject,
    html: html,
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(0);
    }
  });
}

const reset_password_email = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = randtoken.generate(20);
  const subject = "Reset Password Link";
  const html =
    '<p>You requested for reset password, kindly use this <a href="http://localhost:3000/reset-password/' +
    token +
    '">link</a> to reset your password</p>';
  const sent = sendEmail(email, token, subject, html);
  if (sent != 0) {
    user.reset_token = token;
    await user.save();
    res.status(StatusCodes.OK).json({ token });
  } else {
    res.json("Some thing went wrong!!!");
  }
};

const reset_password = async (req, res) => {
  const { token, newPassword } = req.body;
  console.log(token);
  const user = await User.findOne({ reset_token: token });
  console.log(user);
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  user.password = newPassword;
  user.save();
  res.json("UPDATED");
};

export { register, login, updateUser, reset_password_email, reset_password };
