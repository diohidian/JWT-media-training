const express = require("express");
const uploadRouter = require("./api/upload");
const userRouter = require("./api/user");
const cardRouter = require("./api/card")
const api = express.Router();

api.use("/v1/upload", uploadRouter)
api.use("/v1/user", userRouter);
api.use("/v1", cardRouter)

module.exports = api;