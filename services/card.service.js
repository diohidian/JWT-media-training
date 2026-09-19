const { Card } = require("../models");

class CardService {

    async getCard() {
        return await Card.findAll()
    }
}

module.exports = CardService