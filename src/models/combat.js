const mongoose = require('mongoose')
const {Model, Schema} = mongoose

const schema = new Schema({
  "First_pokemon": {
    type: Number,
    required: true
  },
  "Second_pokemon": {
    type: Number,
    required: true
  },
  "Winner": {
    type: Number,
    required: true
  },
})

class Combat extends Model {}

module.exports = mongoose.model(Combat, schema, 'combat');