const express = require("express");

// Controllers Exported 
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../Controllers/UserController");

// Middleware
const { userExists } = require("../Middlewares/UserMiddleware");

const router = express.Router();

// Routers
router.get("/", getAllUsers);

router.post("/", createUser);

router
  .route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { userRoute: router };
