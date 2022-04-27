const { Repair } = require("../Models/RepairModel");

const getAllRepairs = async (req, res) => {
  try {
    const repairCompleted = await Repair.findAll({ where: {status:"completed"}});
    const repairPending = await Repair.findAll({where: {status: "pending"}})
    res.status(200).json({
      repairCompleted,
      repairPending
    });
    
  } catch (error) {
    console.log(error);
  }
};

const createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;
    const repair = await Repair.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Repair Created",
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { repair } = req;
    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { repair } = req;
    const { status } = req.body;

    await repair.update({ status });
    res.status(200).json({
      status: "success",
      message: "Repair Updated",
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { repair } = req;
    await repair.update({ status: "Deleted" });

    res.status(200).json({
      status: "success",
      message: "Repair deleted",
      repair,
    });
  } catch (error) {}
};

module.exports = {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};
