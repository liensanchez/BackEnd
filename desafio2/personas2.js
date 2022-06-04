import express from 'express'
const {Router} = express

//PERSONAS
const personasRouter = Router()

const personas = []

personasRouter.get('', (req,res) => {
  return res.json(personas)
})

personasRouter.post('/personas', (req,res) => {
  const newPersona = req.body
  newPersona.id = personas.length + 1
  personas.push(newPersona)
  return res.status(201).json(newPersona)
})

export default personasRouter