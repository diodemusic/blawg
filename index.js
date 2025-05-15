const app = require("express")();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello world from express and node!");
})

app.listen(PORT => {
    console.log(`It's alive! https://localhost:${PORT}`);
});
