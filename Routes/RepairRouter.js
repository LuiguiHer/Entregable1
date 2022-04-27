const express = require("express");

const { Repair } = require("../Models/RepairModel");

const router = express.Router();

const {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require("../Controllers/RepairController");
const { repairExists } = require("../Middlewares/RepairMiddleware");


router.get("/", getAllRepairs);

router.post("/", createRepair);

router
  .route("/:id")
  .get(repairExists, getRepairById)
  .patch(repairExists, updateRepair)
  .delete(repairExists, deleteRepair)

module.exports = { repairRoute: router };
