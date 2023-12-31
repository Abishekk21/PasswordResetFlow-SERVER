require("dotenv").config();
const express = require("express");
const app = express();
require("./database/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const port = 5000;

app.get("/", (req, res) => {
  res.status(201).json("Server Created Successfully!!!");
});

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`server start at port ${port}`);
});
