const { User } = require("../Models/UserModel");

//middleware created
const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      res.status(404).json({
        status: "error",
        message: "User not Found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExists };
