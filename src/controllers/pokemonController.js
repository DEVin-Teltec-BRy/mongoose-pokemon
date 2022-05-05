const pokemonModel = require('../models/pokemon')

module.exports = {
  getAllPokemons: async (req, res) => {
    const pokemons = await pokemonModel.find({})

    return res.status(200).send(pokemons)
  },
  getAllPokemonsBySpeed: async (req, res) => {
    const {offset, limit} = req.params
    const pokemons = await pokemonModel.find({
      "Speed": {"$gte": 70}
    })
    .select('Name')
    .skip(offset*limit)
    .limit(limit)
    
    const total = await pokemonModel.count({
      "Speed": {"$gte": 70}
    })
    
    return res.status(200).send({records: pokemons, total})
  }
}