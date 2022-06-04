import personasRouter from './personas2.js'
import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public2'))
app.use('/api', personasRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`servidor de desafio ${PORT}`)
})

server.on('error', error => console.log(`error : ${error}`))