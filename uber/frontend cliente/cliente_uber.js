
/*********************************************************************/
/** ************************* MODULOS UTILIZADOS **********************/
/*********************************************************************/
/* módulo para desarrollo web para la construcción de la API */
var express = require('express')
var bodyParser = require('body-parser')
/* modulo para hacer peticiones al bus */
var Request = require('request')
/* creación de una nueva instancia de express */
var app = express()
/*********************************************************************/
/** *********************** Configurar del Servidor *********************/
/*********************************************************************/
app.use(bodyParser.json()) // peticiones aplication/jsons
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '500mb'
}))
app.use(express.static('public'))
app.set('view engine', 'jade')

/*********************************************************************/
/** *********************** Rutas ************************************/
/*********************************************************************/
app.get('/', function (req, res) {
  res.render('servicio')
})

app.post('/call', function (req, res) {
  Request.post({
    headers: { 'content-type': 'application/json' },
    url: 'http://localhost:8081/bus',
    body: JSON.stringify({
      'pais':'502',
      ID: 'C5896',
      altitud: req.body.altitud,
      latitud: req.body.latitud
    })
  }, (error, response, body) => {
    if (error) {
      res.send('No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde')
      return
    }
    var respuesta = JSON.parse(body)
    res.send(respuesta.mensaje)
  })
})

/*********************************************************************/
/** ***************************** SERVIDOR ****************************/
/*********************************************************************/
var server = app.listen(7070, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
