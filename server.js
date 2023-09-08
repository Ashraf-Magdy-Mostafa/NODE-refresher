import express from "express";
//const express = require("express");
import bodyparser from "body-parser";
import cors from "cors";
let port = 3000;
const app = express();
app.use(cors());

app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.use(express.static("website"));
app.listen(port, () => console.log("server running on:" + port));
app.use((req, res, next) => {
  console.log(`time : ${new Date()}`);
  console.log(` http Method is : ${req.method}`);
  next();
});
app.get("/home", (req, res) => {
  res.send("hello there");
});
app.post("/send", (req, res) => {
  console.log("got here fast ");
  res.end();
});
