const express = require("express");

const router = express.Router();

//  Controllers Exported
const {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require("../Controllers/RepairController");

//Middleware
const { repairExists } = require("../Middlewares/RepairMiddleware");

//Routes
router.get("/", getAllRepairs);

router.post("/", createRepair);

router
  .route("/:id")
  .get(repairExists, getRepairById)
  .patch(repairExists, updateRepair)
  .delete(repairExists, deleteRepair);

module.exports = { repairRoute: router };
