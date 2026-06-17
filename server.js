const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.use((express.static('frontend')))

app.listen(PORT, function (){
  console.log(`App running on https://localhost:${PORT}`)
})