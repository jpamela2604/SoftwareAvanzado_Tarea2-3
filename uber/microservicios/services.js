/*********************************************************************************/
/** ****** DATOS POR DEFECTO DEBIDO A LA AUSENCIA DE BASE DE DATOS ****************/
/*********************************************************************************/
var codigo = 893
var listaPilotosDisponibles = []
var listaViajesSinPiloto = []
var piloto1 = {}
piloto1.id = 'P1'
piloto1.nombre = 'Juan Perez'
listaPilotosDisponibles.push(piloto1)
var piloto2 = {}
piloto2.id = 'P2'
piloto2.nombre = 'Luis Lopez'
listaPilotosDisponibles.push(piloto2)
var piloto3 = {}
piloto3.id = 'P3'
piloto3.nombre = 'Ricardo Juarez'
listaPilotosDisponibles.push(piloto3)
var piloto4 = {}
piloto4.id = 'P4'
piloto4.nombre = 'Pedro Morales'
listaPilotosDisponibles.push(piloto4)
var piloto5 = {}
piloto5.id = 'P5'
piloto5.nombre = 'Hugo Sandoval'
listaPilotosDisponibles.push(piloto5)

/*********************************************************************/
/** ************************* MODULOS UTILIZADOS **********************/
/*********************************************************************/

/* módulo para desarrollo web para la construcción de la API */
var express = require('express')
/* módulo para la implementación de servidor web http */
var http = require('http')
/* creación de una nueva instancia de express */
var app = express()
var bodyParser = require('body-parser')

/*********************************************************************/
/** *********************** Configurar BodyParser *********************/
/*********************************************************************/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '500mb'
}))
/*********************************************************************/
/** ***************************** APIs  *******************************/
/*********************************************************************/
/*
*   API
*   1. INICIAR_VIAJE (Solicitud de servicio por parte del cliente)
*/
app.post('/iniciar_viaje', (req, res) => {
  console.log('El cliente ' + req.body.ID + '  ubicado en: latitud ' + req.body.origen_latitud + ', ' + 'altitud ' + req.body.origen_altitud + ' desea iniciar un viaje hacia: latitud ' + req.body.destino_latitud + ', ' + 'altitud ' + req.body.destino_altitud)
  var num = Math.random()
  if (num < 0.05) {
    var obj = { status: false, mensaje: 'No se pudo solicitad servicio, intente de nuevo' }
    var myJSON = JSON.parse(JSON.stringify(obj))
    res.send(myJSON)
  } else {
    var viaje = {}
    viaje.codigo = codigo++
    viaje.idCliente = req.body.ID
    viaje.origen = req.body.origen
    viaje.destino = req.body.destino
    listaViajesSinPiloto.push(viaje)
    var cadena = { status: true, mensaje: 'exito', codigo: viaje.codigo }
    var cadenaJson = JSON.parse(JSON.stringify(cadena))
    res.send(cadenaJson)
  }
})
/*
*   API
*   2. Recepción de solicitud y aviso al piloto
*/
app.post('/piloto', (req, res) => {
  console.log('el viaje:' + req.body.viaje + ' con origen en: latitud ' + req.body.origen_latitud + ', ' + 'altitud ' + req.body.origen_altitud + ' y destino: latitud ' + req.body.destino_latitud + ', ' + 'altitud busca un piloto' + req.body.destino_altitud)
  if (listaPilotosDisponibles.length === 0) {
    var obj = { status: false, mensaje: 'No hay pilotos disponibles, por favor intentelo de nuevo mas tarde' }
    var myJSON = JSON.parse(JSON.stringify(obj))
    res.send(myJSON)
  } else {
    var cadena = { status: true, mensaje: 'exito', piloto: listaPilotosDisponibles.pop() }
    var cadenaJson = JSON.parse(JSON.stringify(cadena))
    res.send(cadenaJson)
  }
})
/*
*   API
*   3. Solicitud de ubicación (rastreo) desde la administración del servicio de carros
*/
app.post('/rastreo', (req, res) => {
  console.log('El ' + req.body.TIPO + ' "' + req.body.ID + '" desea conocer su ubicacion')
  var num = Math.random()
  if (num < 0.05) {
    var obj = { status: false, mensaje: 'No se pudo obtener la ubicacion' }
    var myJSON = JSON.parse(JSON.stringify(obj))
    res.send(myJSON)
  } else {
    var latitud = Math.floor(Math.random() * ((20) - (-10) + 1) + (-10)) + Math.random()
    var altitud = Math.floor(Math.random() * ((20) - (-10) + 1) + (-10)) + Math.random()
    var cadena = { status: true, latitud: latitud, altitud: altitud }
    var cadenaJson = JSON.parse(JSON.stringify(cadena))
    res.send(cadenaJson)
  }
})

/*********************************************************************/
/** ***************************** SERVIDOR ****************************/
/*********************************************************************/

/* Creacion del servidor que escucha en el puerto 8001 */
http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001')
})
