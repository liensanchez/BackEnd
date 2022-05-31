//ROUTER
//como mini app de express para nuevas rutas

const express = require ('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let messages = [
  {
    "id:":1,
    "title":"ok",
    "message":"todo ok"
  }, 
  {
    "id":2,
    "title":"diferente",
    "message":"esto no es el ok"
  }
]

app.get('/api/mensajes', (req,res)=>{
  
  return res.json(messages)

})

app.post('/api/mensajes', (req,res) => {
  const newMessage = req.body

  newMessage.id = messages.length + 1

  messages.push(newMessage)

  return res.status(201).json(newMessage)
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`servidor en ${PORT}`)
})

server.on('error' , error => console.log(`error : ${error}`))