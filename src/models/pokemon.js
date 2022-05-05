const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokemonSchema = Schema({
  "#": {
    type: Number,
    unique: true,
    required: true
  },
  "Name": {
    type: String,
    unique: true,
    required: true
  },
  "Type 1": {
    type: String,
    required: true
  },
  "Type 2": {
    type: String
  },
  "HP": {
    type: Number,
    required: true
  },
  "Attack": {
    type: Number,
    required: true
  },
  "Defense": {
    type: Number,
    required: true
  },
  "Sp": {
    " Atk": {
      type: Number,
      required: true
    },
    " Def": {
      type: Number,
      required: true
    }
  },
  "Speed": {
    type: Number,
    required: true
  },
  "Generation": {
    type: Number,
    required: true
  },
  "Legendary": {
    type: Boolean,
    required: true,
    default: false
  },
})

const Model = mongoose.model("pokemon", pokemonSchema)
module.exports = Model