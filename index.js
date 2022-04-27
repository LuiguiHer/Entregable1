const express = require("express");

const app = express();

app.use(express.json());
// Export Routes
const { userRoute } = require("./Routes/UserRouter");
const { repairRoute } = require("./Routes/RepairRouter");

//Endpoints
app.use("/api/v1/users", userRoute);
app.use("/api/v1/repairs", repairRoute);

module.exports = app;
