
// const params = require('yargs-parser')(process.argv.slice(2))
// const colors = require('colors')

// const nombre = params.name
// console.log(`hola koder ${nombre}`.rainbow)

// /**
//  * Un script que reciba mi nombre como parametro y que nos salude con colores de arcoiris
//  * node saludo.js --nombre=charles
//  * - Debe ser un nuevo proyecto de node
//  * - A terminar compartir el repositorio de github 
//  *  - Que no este versionada la caarpeta node_modules
//  *  - Que corra el proyecto
//  */

const fs = require('fs')

fs.readFile('text.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
