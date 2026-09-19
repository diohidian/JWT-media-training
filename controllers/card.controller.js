const CardService = require("../services/card.service")
const cardService = new CardService()
class CardController {

    async getCard(req, res) {
        try {
        const card = await cardService.getCard()
        res.status(201).json({
            message: "get data sucess",
            data: card
        })
        } catch (error) {
        res.status(400).json({
            message: error.message
        })
        }
    }
}

module.exports = CardController