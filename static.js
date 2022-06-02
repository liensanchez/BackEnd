
//serv express
const express = require('express')

const app = express()

app.use(express.static('public'))

const PORT = 8070

//serv
const server = app.listen(PORT, () => {
  console.log(`PORT : ${PORT}`)
})

//error
server.on('error', error => console.log(`Error ${error}`))