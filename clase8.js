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
//ya no es necesario usar app.get, etc

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

//asociamos router con app con el path 'principal', router y se quita de linea 61 y67 xq ya esta en app.use
app.use('/api/mensajes', messagesRouter)

//va el '' vacio xq ya tenemos el path para todos en el prefijo de linea 58
messagesRouter.get('', (req,res)=>{
  
  return res.json(messages)

})

messagesRouter.post('', (req,res) => {
  const newMessage = req.body

  newMessage.id = messages.length + 1

  messages.push(newMessage)

  return res.status(201).json(newMessage)
})

//===============================================STATIC
//esto utiliza lo q esta dentro de la carpeta xq ej un html como en desafio2
app.use (express.static('public'))

//middleware
//funcion en el medio de request y response


//middleware de app recibe 2 params y next SIEMPRE ES EL 3ER PARAM NEXT
app.use(function (req, res, next){

  console.log('Fecha', Date.now())
  //
  return next
})

//en este middleware el next va en 4to param
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    error:err.message
  })
})


//=============================================MULTER