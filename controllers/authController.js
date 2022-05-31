import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import randtoken from "rand-token";
import nodemailer from "nodemailer";

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ username, email, password });
  send_confirm_email(email);
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      username: user.username,
      confirm_token: user.confirm_token,
    },
    token,
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
  res.status(StatusCodes.OK).json({ user, token });
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

async function send_confirm_email(email) {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = randtoken.generate(20);
  const subject = "Confirm your account";
  const html =
    '<p>Please click here <a href="http://localhost:3000/confirm_email/' +
    token +
    '">link</a> to confirm your account</p>';
  const sent = sendEmail(email, token, subject, html);
  if (sent != 0) {
    user.confirm_token = token;
    user.save();
  }
}

const confirm_user = async (req, res) => {
  const { token } = req.body;
  const user = await User.findOne({ where: { confirm_token: token } });
  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  }
  user.update({ confirmed: true });
  res.status(StatusCodes.OK).json("SUCCESS");
};

export { register, login, updateUser, reset_password_email, reset_password };
