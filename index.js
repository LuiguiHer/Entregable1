const express = require('express');



const app = express();


app.use(express.json());

const { userRoute } = require('./Routes/UserRouter');
const { repairRoute } = require('./Routes/RepairRouter');

app.use("/api/v1/users", userRoute);
app.use("/api/v1/repairs", repairRoute);

module.exports = app;

