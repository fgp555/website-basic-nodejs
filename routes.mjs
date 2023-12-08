// const express = require("express");
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "home page",
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", {
    title: "about page",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", {
    title: "contact page",
  });
});

// module.exports = app;
export default app;
