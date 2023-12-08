// const express = require("express");
// const routes = require("./routes");
import express from "express";
import routes from "./routes.mjs";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(routes);

app.listen(3000, console.info("server http://localhost:3000"));
