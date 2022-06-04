import animalesRouter from './animales1.js'
import express from 'express'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/animales', animalesRouter)

const PORT = 8071

const server = app.listen(PORT, () => {
  console.log(`servidor de desafio ${PORT}`)
})

server.on('error', error => console.log(`error : ${error}`))
