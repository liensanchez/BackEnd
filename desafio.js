
const express = require ('express')
const {Router} = express

const PORT = 8090

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const server = app.listen(PORT, () => {
  console.log(`servidor en ${PORT}`)
})

server.on('error' , error => console.log(`error : ${error}`))

//=====================================PERSONAS

let personas = [
  {
    "id:":1,
    "nombre":"Lien",
    "apellido":"Sanchez"
  }
]

const personasRouter = Router()

personasRouter.get('', (req,res)=>{
  
  return res.json(personas)

})

personasRouter.post('', (req,res) => {
  const newPersona = req.body

  newPersona.id = personas.length + 1

  personas.push(newPersona)

  return res.status(201).json(newPersona)
})

app.use('/api/personas', personasRouter)

//========================================ANIMALES


let animales = [
  {
    "id:":1,
    "nombre":"Sara",
    "raza":"Golden",
    "edad":5
  }
]

const animalesRouter = Router()

animalesRouter.get('', (req,res)=>{
  
  return res.json(animales)

})

animalesRouter.post('', (req,res) => {
  const newAnimal = req.body

  newAnimal.id = animales.length + 1

  animales.push(newAnimal)

  return res.status(201).json(newAnimal)
})

app.use('/api/animales', animalesRouter)