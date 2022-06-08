import User from "../models/User.js";

const getUserById = async (req, res) => {
  const userId = req.query.userId;
  try {
    const user = await User.findById(userId);
    console.log(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { getUserById };
