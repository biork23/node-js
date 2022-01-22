const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')
console.log('params:' , params)

const nombres = [
    'carlos',
    'sara',
    'Erik',
    'Ivonne',
    'Alberto',
    'Leo',
    'Alex',
    'Airy',
    'freddy',
    'Jose',
    'carlo'
  ]

  const koderName = params.name
  const exist = nombres.includes(koderName)

  if (exist) {
      console.log('Hola koders'.rainbow)
  } else {
      console.log('Quien eres'.rainbow)
  }

/**
 * Un script que reciba mi nombre como parametro y que nos salude con colores de arcoiris
 * node saludo.js --nombre=charles
 * - Debe ser un nuevo proyecto de node
 * - A terminar compartir el repositorio de github 
 *  - Que no este versionada la caarpeta node_modules
 *  - Que corra el proyecto
 */