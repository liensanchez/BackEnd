//llamamos a File System module
const fs = require ('fs')

//clase contenedor
class Contenedor {
  constructor(nombre){
    this.nombre = nombre
  }

  //Recibe un objeto 
  async save(item){
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    }catch(e){
      data = []
    }

    const lastItem = data [data.length -1]

    let id = 1

    if(lastItem){
      id = lastItem.id + 1
    }
    item.id = id

    //lo guarda en el archivo, devuelve el id asignado.
    data.push(item)
    return fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(data, null, 2))
  }

  //Recibe un id y devuelve el objeto con ese id
  async getById (id) {
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    return data.find(item => item.id === id)
  }

  //Devuelve un array con los objetos presentes en el archivo.
  async getAll () {
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    return data
  }

  //Elimina del archivo el objeto con el id buscado.
  async deleteById (id) {
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    const productIndex = data.findIndex(item => item.id === id)

    if (productIndex === -1) {
      return
    }

    data.splice(productIndex, 1)

    return fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(data, null, 2))
  }

  //Elimina todos los objetos
  async deleteAll () {
    return fs.promises.writeFile(`./${this.nombre}`, '')
  }
 }

 module.exports = Contenedor