# Contenido
Esta carpeta contiene la clase "service.js" donde se encuentra la implementacion de las APIs necesarias para implementar el servicio  "Recepción de solicitud y aviso al piloto".
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

Se crearon dos listas, una para guardar los pilotos que estan disponibles (listaPilotosDisponibles), cada piloto consta de un ID y un nombre. 


## MODULOS UTILIZADOS

1. express
2. http
3. bodyParser
## CONFIGURACION BODYPARSER

Se configura el bodyparser para que analice los cuerpos de solicitud entrantes en un middleware antes de sus manejadores.

## APIs

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


## SERVIDOR

Se crea una servidor para que acepte las solicitudes de los consumidores de las APIs, a través del puerto 8002.