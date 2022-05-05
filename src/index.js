require('./utils/db')
require("dotenv").config();

const express = require('express')
const app = express()
const routes = require('./routes')
app.use(express.json())
app.use(routes)

app.use('/', (req, res) => {
  return res.status(200).send({ message: 'Conectou na Api' })
})


app.listen(3333, () => console.log('A aplicação está executando na porta 3333'))