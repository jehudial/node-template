const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const testRoutes = require("./routes/test-routes");

// const HttpError= require("../models/http-error");
const HttpError= require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
  });

  app.use("/api/test", testRoutes);

  app.use((req, res, next) => {
    const error = new HttpError("Could not find the route.", 404);
    throw error;
  });

  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "An unkown error occurred!" });
  });
  
app.listen(5000)

