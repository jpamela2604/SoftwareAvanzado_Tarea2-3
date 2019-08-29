# Contenido
Esta carpeta contiene la clase "service.js" donde se encuentra la implementacion de las APIs necesarias para implementar los servicios: "Solicitud de servicio por parte del cliente"

Antes de iniciar el proyecto crear el archivo packege.json con el comando:

```html
    npm init
```
En el cual se debe ingresar datos como el nombre del p  aquete, version, repositorio de git, palabras claves entre otro. Seguidamente hay que instalarle el modulo "express" para que nos permita crear las APIs, con el comando: 
 
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
 La  lista se utiliza para guardar la solicitud de los viajes  (listaViajesSinPiloto) que consta idCliente, origen y destino.


## MODULOS UTILIZADOS

1. express
2. http
3. bodyParser
## CONFIGURACION BODYPARSER

Se configura el bodyparser para que analice los cuerpos de solicitud entrantes en un middleware antes de sus manejadores.

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


## SERVIDOR

Se crea una servidor para que acepte las solicitudes de los consumidores de las APIs, a través del puerto 8001.