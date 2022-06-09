import User from "../models/User.js";

const getUserById = async (req, res) => {
  const userId = req.query.userId;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const changeProfile = async (req, res) => {
  try {
    const updateProfile = await User.findOneAndUpdate(
      { _id: req.user.userId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ updateProfile });
  } catch (error) {
    res.status(500).json(err);
  }
};

export { getUserById, changeProfile };
