const { User } = require("../Models/UserModel");

// GET ALL
const getAllUsers = async (req, res) => {
  try {
    const usersActive = await User.findAll({ where: { status: "ACTIVE" } });
    const userDeleted = await User.findAll({ where: { status: "deleted" } });
    res.status(200).json({
      usersActive,
      userDeleted,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET BY ID
const getUserById = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// POST
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create(req.body);
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// PATCH
const updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name, email, password, role } = req.body;

    if (password || role) {
      res.status(404).json({
        status: "error",
        message: " you can't update propierties like password or role",
      });
    }

    await user.update({ name, email });
    res.status(200).json({ user, message: " user Updated" });
  } catch (error) {
    console.log(error);
  }
};

//DELETE
const deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: "deleted" });

    res.status(200).json({
      status: "success",
      message: "User Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
