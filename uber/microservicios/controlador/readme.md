# Contenido
Esta carpeta contiene la implementacion simulada de un Enterprise Service Bus, implementandolo como un API

Antes de iniciar el proyecto crear el archivo packege.json con el comando:

```html
    npm init
```
En el cual se debe ingresar datos como el nombre del paquete, version, repositorio de git, palabras claves entre otro. Seguidamente hay que instalarle el modulo "express" para que nos permita crear las APIs, con el comando: 
 
```html
    npm install express
```
---
## ARCHIVO "ebs.js"
En este archivo encontramos las siguientes secciones.
- [MODULOS UTILIZADOS](#MODULOS-UTILIZADOS)
- [CONFIGURACION BODYPARSER](#CONFIGURACION-BODYPARSER)
- [API ESB](#api-ESB)
- [SERVIDOR](#servidor)
---
## MODULOS UTILIZADOS

1. express
2. http
3. bodyParser
4. request

## CONFIGURACION BODYPARSER

Se configura el bodyparser para que analice los cuerpos de solicitud entrantes en un middleware antes de sus manejadores.

## API ESB

Este API orquesta la funcionalidad principal, mediante la invocacion de las APIS en un orden logico de tal manera que si ocurre un error lo maneja internamente.

## SERVIDOR

Se crea una servidor para que acepte las solicitudes de los consumidores de las APIs, a través del puerto 7002.