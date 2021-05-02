const express = require("express");
const Route = express.Router();
const user = require("./user");
const msg = require("./messages");

Route.use("/users", user);
Route.use("/messages", msg);

module.exports = Route;
