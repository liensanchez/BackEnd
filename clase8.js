//ROUTER
//como mini app de express para nuevas rutas

const express = require ('express')

//requerimos router
const {Router} = express


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`servidor en ${PORT}`)
})

server.on('error' , error => console.log(`error : ${error}`))


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

//nuevo router
const messagesRouter = Router()
//ya nnoi es necesario usar app.get, etc

/*REEMPLAZADO X ROUTER
app.get('/api/mensajes', (req,res)=>{
  
  return res.json(messages)

})

app.post('/api/mensajes', (req,res) => {
  const newMessage = req.body

  newMessage.id = messages.length + 1

  messages.push(newMessage)

  return res.status(201).json(newMessage)
})
*/

//va el '' vacio xq ya tenemos el path para todos
messagesRouter.get('', (req,res)=>{
  
  return res.json(messages)

})

messagesRouter.post('', (req,res) => {
  const newMessage = req.body

  newMessage.id = messages.length + 1

  messages.push(newMessage)

  return res.status(201).json(newMessage)
})

//asociamos router con app con el path 'principal', router y se quita de linea 50 y56 xq ya esta en app.use
app.use('/api/mensajes', messagesRouter)








