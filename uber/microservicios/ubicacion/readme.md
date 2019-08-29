# Contenido
Esta carpeta contiene la clase "service.js" donde se encuentra la implementacion de las APIs necesarias para implementar el servicio " Solicitud de ubicación (rastreo) desde la administración del servicio de carros"

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
- [MODULOS UTILIZADOS](#MODULOS-UTILIZADOS)
- [CONFIGURACION BODYPARSER](#CONFIGURACION-BODYPARSER)
- [APIs](#apis)
- [SERVIDOR](#servidor)
---


## MODULOS UTILIZADOS

1. express
2. http
3. bodyParser
## CONFIGURACION BODYPARSER

Se configura el bodyparser para que analice los cuerpos de solicitud entrantes en un middleware antes de sus manejadores.

## APIs

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

Se crea una servidor para que acepte las solicitudes de los consumidores de las APIs, a través del puerto 8003.