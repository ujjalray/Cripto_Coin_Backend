const express = require("express");
require("./Database/config");
const user = require("./Scama/User");
const cors = require("cors");
const app = express();
const BASE_URL= process.env.BASE_URL;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    console.log(await user.find());
    res.send(await user.find());
});

app.post("/submit", async (req, res) => {
    const result = new user(req.body);
    const feedback = await result.save();
    console.log(feedback);
    res.send(feedback);
});

app.listen(4000,() => {
    console.log("Server listening on port 4000");
});
