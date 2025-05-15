const app = require("express")();
const PORT = 8080;

app.get("/api/", (req, res) => {
    res.status(200).send({
        message: "Hello world"
    });
});

app.listen(PORT, () => {
    console.log(`It's alive! localhost:${PORT}`);
});
