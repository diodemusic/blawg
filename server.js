// enviroment variables
require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

// set up express app
const express = require("express");
const app = express();

// require routes
const healthRoutes = require("./src/routes/health.route");
const postRoutes = require("./src/routes/post.route")

// require mongoose and connect
const mongoose = require("mongoose");

mongoose.connect(MONGODB_CONNECTION_STRING)
    .then(() => console.log("connected to mongodb"));

// require logger
const morgan = require("morgan");

// middleware
app.use(express.json());
app.use(morgan("dev"));

// mount routers
app.use("/api/health/", healthRoutes);
app.use("/api/post/", postRoutes);

// start listening
app.listen(PORT, () => {
    console.log(`It's alive! localhost:${PORT}`);
});
