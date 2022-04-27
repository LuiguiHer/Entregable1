const { Repair } = require("../Models/RepairModel");

const repairExists = async (req, res, next) => {
    try {
        const { id } = req.params;
        const repair = await Repair.findOne({ where: { id }});

        if (!repair) {
            res.status(404).json({
                status:"error",
                message: "The Repair wasn't found"
            })
        }
        req.repair = repair;
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = { repairExists }