const express = require('express')

const {Router} = express

const Contenedor = require('./contenedorProduct')

const contenedor = new Contenedor('products.txt')

const app = express()

const productosRouter = Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', productosRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`servidor de desafio ${PORT}`)
})

server.on('error', error => console.log(`error : ${error}`))

productosRouter.get('/productos', async(req,res) => {
  const productos = await contenedor.getAll()
  console.log(productos)
  return res.json(productos)
})

productosRouter.get('/productos/:id', async(req,res) => {
  const id = Number(req.params.id)
  const productos = await contenedor.getById(id)
  console.log(productos)
  return res.json(productos)
})

productosRouter.post('/productos', async (req, res) => {
  const producto = req.body
  console.log(`Nuevo: ${producto.name} y precio ${producto.precio}`)
  await contenedor.save(producto)
  return res.json(producto)
})

productosRouter.delete('/productos/:id', async(req,res) => {
  const id = Number(req.params.id)
  const productos = await contenedor.deleteById(id)
  console.log(productos)
  return res.json(productos)
})