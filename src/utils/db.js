const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/aula1')

const db = mongoose.connection

db.on("Error", console.error.bind(console, "Connection error:"))
db.once("open", () => {
  console.log('Connect to mongodb on aula1')
})