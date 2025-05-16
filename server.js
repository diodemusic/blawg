require("dotenv").config();
const express = require("express");
const app = express();
const health = require("./src/routes/health.route");

// middleware
app.use(express.json());

// mount routers
app.use("/api/health/", health);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`It's alive! localhost:${PORT}`);
});
