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
/* modulo para hacer peticiones a las apis */
var Request = require('request')

/*********************************************************************/
/** *********************** Configurar BodyParser *********************/
/*********************************************************************/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '500mb'
}))

/*********************************************************************/
/** ***************************** API ESB *******************************/
/*********************************************************************/

app.post('/bus', (req, res) => {
  console.log('El cliente ' + req.body.ID + ' desea iniciar un viaje hacia: latitud ' + req.body.latitud + ', ' + 'altitud ' + req.body.altitud)

  // pedir la ubicacion actual del cliente
  Request.post({
    headers: { 'content-type': 'application/json' },
    url: 'http://localhost:8001/rastreo',
    body: JSON.stringify({
      ID: req.body.ID,
      TIPO: 'CLIENTE'
    })
  }, (error1, response1, body1) => {
    if (error1) {
      // si no se pudo obtener la ubicacion enviar mensaje de error
      var obj = { status: false, mensaje: 'No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde' }
      var myJSON = JSON.parse(JSON.stringify(obj))
      res.send(myJSON)
      return
    }

    var ubicacionCliente = JSON.parse(body1)
    if (ubicacionCliente.status === false) {
      var obj2 = { status: false, mensaje: 'No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde' }
      var myJSON2 = JSON.parse(JSON.stringify(obj2))
      res.send(myJSON2)
      return
    }
    // llamar al api VIAJE
    Request.post({
      headers: { 'content-type': 'application/json' },
      url: 'http://localhost:8001/iniciar_viaje',
      body: JSON.stringify({
        ID: req.body.ID,
        origen_latitud: req.body.latitud,
        origen_altitud: req.body.altitud,
        destino_latitud: ubicacionCliente.latitud,
        destino_altitud: ubicacionCliente.altitud
      })
    }, (error2, response2, body2) => {
      if (error2) {
        // si no se pudo obtener informacion de la API VIAJE
        var obj = { status: false, mensaje: 'No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde' }
        var myJSON = JSON.parse(JSON.stringify(obj))
        res.send(myJSON)
        return
      }

      var viaje = JSON.parse(body2)
      if (viaje.status === false) {
        var obj2 = { status: false, mensaje: 'No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde' }
        var myJSON2 = JSON.parse(JSON.stringify(obj2))
        res.send(myJSON2)
        return
      }
      // asignar piloto al viaje
      Request.post({
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:8001/piloto',
        body: JSON.stringify({
          viaje: viaje.codigo,
          origen_latitud: req.body.latitud,
          origen_altitud: req.body.altitud,
          destino_latitud: ubicacionCliente.latitud,
          destino_altitud: ubicacionCliente.altitud
        })
      }, (error3, response3, body3) => {
        if (error3) {
          var obj3 = { status: false, mensaje: 'No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde' }
          var myJSON3 = JSON.parse(JSON.stringify(obj3))
          res.send(myJSON3)
          return
        }
        var piloto = JSON.parse(body3)
        if (piloto.status === false) {
          res.send(piloto)
          return
        }
        Request.post({
          headers: { 'content-type': 'application/json' },
          url: 'http://localhost:8001/rastreo',
          body: JSON.stringify({
            ID: piloto.piloto.id,
            TIPO: 'PILOTO'
          })
        }, (error, response, body) => {
          if (error) {
            var obj = { status: false, mensaje: 'No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde' }
            var myJSON = JSON.parse(JSON.stringify(obj))
            res.send(myJSON)
            return
          }
          var infoPiloto = JSON.parse(body)
          if (infoPiloto.status === false) {
            var obj4 = { status: false, mensaje: 'No se pudo hacer la operacion, por favor intentelo de nuevo mas tarde' }
            var myJSON4 = JSON.parse(JSON.stringify(obj4))
            res.send(myJSON4)
            return
          }
          infoPiloto.nombre = piloto.piloto.nombre
          var obj5 = { status: false,
            mensaje: 'El piloto: ' + infoPiloto.nombre + ' ira por usted, este esta ubicado en: latitud' + infoPiloto.latitud +
        ', altitud:' + infoPiloto.altitud }
          var myJSON5 = JSON.parse(JSON.stringify(obj5))
          res.send(myJSON5)
        })
      })
    })
  })
})

/*********************************************************************/
/** ***************************** SERVIDOR ****************************/
/*********************************************************************/

/* Creacion del servidor que escucha en el puerto 7002 */
http.createServer(app).listen(7002, () => {
  console.log('Server started at http://localhost:7002')
})
