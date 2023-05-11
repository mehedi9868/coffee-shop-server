const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("COFFEE SHOP server is running.");
})

app.listen(port, () => {
    console.log(`COFFEE SHOP server is running on port:${port}`);
})