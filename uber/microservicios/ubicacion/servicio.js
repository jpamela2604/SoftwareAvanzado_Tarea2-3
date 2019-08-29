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
*   3. Solicitud de ubicación (rastreo) desde la administración del servicio de carros
*/
app.post('/rastreo', (req, res) => {
    console.log(req.body)
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

/* Creacion del servidor que escucha en el puerto 8003 */
http.createServer(app).listen(8003, () => {
    console.log('Server started at http://localhost:8003')
  })
  