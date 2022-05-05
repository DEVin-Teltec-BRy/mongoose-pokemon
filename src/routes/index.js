const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemonController')
const combatController = require('../controllers/combatController')

router.get('/getAllPokemons', pokemonController.getAllPokemons)
router.get('/getAllPokemonsBySpeed/:offset/:limit', pokemonController.getAllPokemonsBySpeed)
router.get('/getAllCombats', combatController.getAllCombats)

module.exports = router