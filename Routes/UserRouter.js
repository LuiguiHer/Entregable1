const express = require("express");

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../Controllers/UserController");
const { userExists } = require("../Middlewares/UserMiddleware");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router
  .route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { userRoute: router };
