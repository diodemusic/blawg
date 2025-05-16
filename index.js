require("dotenv").config();
const app = require("express")();

const PORT = process.env.PORT;

app.get("/api/health", (req, res) => {
    res.status(200).send({
        message: "LGTM 👍"
    });
});

app.listen(PORT, () => {
    console.log(`It's alive! localhost:${PORT}`);
});
