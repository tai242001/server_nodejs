const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyparser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routers/author");
const UserRoute = require("./routers/User");


dotenv.config();
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("connected")
})


app.use(cors());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(morgan("common"));


//Routes
app.use("/v1/add", authorRoute);

app.use("/v2/user", UserRoute);


app.listen(5000, () => {
    console.log("server is ruuning...");
});