# Contenido
Esta carpeta contiene la clase "service.js" donde se encuentra la implementacion de las APIs necesarias para implementar los servicios:
1. Solicitud de servicio por parte del cliente
2. Recepción de solicitud y aviso al piloto
3. Solicitud de ubicación (rastreo) desde la administración del servicio de carros

Antes de iniciar el proyecto crear el archivo packege.json con el comando:

```html
    npm init
```
En el cual se debe ingresar datos como el nombre del paquete, version, repositorio de git, palabras claves entre otro. Seguidamente hay que instalarle el modulo "express" para que nos permita crear las APIs, con el comando: 
 
```html
    npm install express
```
---

## ARCHIVO "services.js"
En este archivo encontramos las siguientes secciones.
- [DATOS POR DEFECTO DEBIDO A LA AUSENCIA DE BASE DE DATOS](#datos-por-defecto-debido-a-la-ausencia-de-base-de-datos)
- [MODULOS UTILIZADOS](#MODULOS-UTILIZADOS)
- [CONFIGURACION BODYPARSER](#CONFIGURACION-BODYPARSER)
- [APIs](#apis)
- [SERVIDOR](#servidor)
---
## DATOS POR DEFECTO DEBIDO A LA AUSENCIA DE BASE DE DATOS

Se crearon dos listas, una para guardar los pilotos que estan disponibles (listaPilotosDisponibles), cada piloto consta de un ID y un nombre. La otra lista se utiliza para guardar la solicitud de los viajes  (listaViajesSinPiloto) que consta idCliente, origen y destino.


## MODULOS UTILIZADOS

1. express
2. http
3. bodyParser
## CONFIGURACION BODYPARSER

Se configura el bodyparser para que analice los cuerpos de solicitud entrantes en un middleware antes de sus manejadores, 

## APIs

### VIAJE

Dentro de esta API se recibe la solicitud de inicio de un viaje la cual se almacena en la lista "listaViajesSinPiloto". Se crea una probabilidad de error del 0.20 para que se simule un comportamiento normal donde pueden existir fallas.
> **RUTA**. 


       '/iniciar_viaje'

> **PARAMETROS DE ENTRADA**. 


        ID: Id del cliente que solicita el servicio
        ORIGEN: Lugar donde se trae al cliente (altitud y longitud)
        DESTINO: Lugar a donde se lleva al cliente (altitud y longitud)


> **PARAMETROS DE SALIDA:**. 


        STATUS: true si no hubo problemas, false si si.
        MENSAJE: Resultado de la operacion.
        CODIGOVIAJE: Si se creo exitosamente.
### PILOTO
Dentro de esta API se recibe el codigo del viaje para que se busque la asignacion de un piloto, en esta API se hace uso de la lista listaPilotosDisponibles para asignarle una al cliente, si no hay pilotos disponibles se envia una respuesta. Sacar de la lista "listaViajesSinPiloto" el viaje si hubo exito.
> **RUTA**. 


       '/piloto'

> **PARAMETROS DE ENTRADA**. 


        Viaje: Id que se genero al pedir un servicio.
        ORIGEN: Lugar donde se trae al cliente (altitud y longitud)
        DESTINO: Lugar a donde se lleva al cliente (altitud y longitud)


> **PARAMETROS DE SALIDA:**. 


        STATUS: true si no hubo problemas, false si si.
        MENSAJE: Resultado de la operacion.
### UBICACION
Dentro de esta API se recibe el codigo ya sea del piloto o del cliente, junto con el rol que ocupa. Generando internamente una ubicacion aleatoria la cual simula la posicion actual del usuario.
> **RUTA**. 


       '/rastreo'

> **PARAMETROS DE ENTRADA**. 


        Id: del usuario
        Tipo: cliente o piloto


> **PARAMETROS DE SALIDA:**. 


        STATUS: true si no hubo problemas, false si si.
        MENSAJE: Resultado de la operacion.
        LATITUD
        ALTITUD

## SERVIDOR

Se crea una servidor para que acepte las solicitudes de los consumidores de las APIs, a través del puerto 8001.