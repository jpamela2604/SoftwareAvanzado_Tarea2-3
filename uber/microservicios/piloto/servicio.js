/*********************************************************************************/
/** ****** DATOS POR DEFECTO DEBIDO A LA AUSENCIA DE BASE DE DATOS ****************/
/*********************************************************************************/
var listaPilotosDisponibles = []
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
/*********************************************************************/
/** ***************************** SERVIDOR ****************************/
/*********************************************************************/

/* Creacion del servidor que escucha en el puerto 8002 */
http.createServer(app).listen(8002, () => {
    console.log('Server started at http://localhost:8002')
  })
  