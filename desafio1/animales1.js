import express from 'express'
const {Router} = express

//ANIMALES
const animalesRouter = Router()

let animales = [
  {
    "id:":1,
    "nombre":"Sara",
    "raza":"Golden",
    "edad":5
  }
]

animalesRouter.get('', (req,res)=>{
  
  return res.json(animales)

})

animalesRouter.post('', (req,res) => {
  const newAnimal = req.body

  newAnimal.id = animales.length + 1

  animales.push(newAnimal)

  return res.status(201).json(newAnimal)
})

export default animalesRouter

//PERSONAS
/*
const personasRouter = Router()
app.use('/api/personas', personasRouter)

let personas = [
  {
    "id:":1,
    "nombre":"Sara",
    "apellido":"Gol",
    "edad":5
  }
]

personasRouter.get('', (req,res)=>{
  
  return res.json(personas)

})

personasRouter.post('', (req,res) => {
  const newPersona = req.body

  newPersona.id = personas.length + 1

  personas.push(newPersona)

  return res.status(201).json(newPersona)
})*/