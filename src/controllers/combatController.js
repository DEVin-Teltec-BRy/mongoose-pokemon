const combatModel = require('../models/combat')

module.exports = {
  getAllCombats: async (req, res) => {
    const combats = await combatModel.aggregate([
      {
        "$limit": 10
      },
      {
        "$lookup": {
          from: "pokemons",
          localField: "Winner",
          foreignField: "#",
          as: 'pokemon'
        }
      }
    ])

    return res.status(200).send(combats)
  }
}