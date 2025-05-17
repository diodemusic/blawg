require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const express = require("express");
const app = express();
const health = require("./src/routes/health.route");
const createPost = require("./src/routes/post.route")
const mongoose = require("mongoose");
var morgan = require("morgan");

mongoose.connect(MONGODB_CONNECTION_STRING)
    .then(() => console.log("connected to mongodb"));

// middleware
app.use(express.json());
app.use(morgan("dev"));

// mount routers
app.use("/api/health/", health);
app.use("/api/post/", createPost)

app.listen(PORT, () => {
    console.log(`It's alive! localhost:${PORT}`);
});
