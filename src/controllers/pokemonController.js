const pokemonModel = require('../models/pokemon')

module.exports = {
  getAllPokemons: async (req, res) => {
    const pokemons = await pokemonModel.find({})

    return res.status(200).send(pokemons)
  }
}