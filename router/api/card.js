const express = require('express');
const cardRouter = express.Router()
const CardController = require("../../controllers/card.controller")
const cardController = new CardController()

cardRouter.get("/card", cardController.getCard)

module.exports = cardRouter