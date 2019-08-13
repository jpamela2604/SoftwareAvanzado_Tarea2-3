# Contenido
Esta carpeta contiene la implementacion de una pagina web que hace uso del bus como medio para hacer uso de los microservicios.

Antes de iniciar el proyecto crear el archivo packege.json con el comando:

```html
    npm init
```
En el cual se debe ingresar datos como el nombre del paquete, version, repositorio de git, palabras claves entre otro. Seguidamente hay que instalarle el modulo "express" para que nos permita crear las APIs, con el comando: 
 
```html
    npm install express
```
---
# DESCRIPCION TECNICA

Esta carpeta contiene las subcarpetas:
- node_modules: donde estan el codigo de los modulos utilizados.
- public: donde se encuentran los archivos que el servidor utiliza para mostrar.
- views: se encuentran los archivos .jade que muestran en el navegador.

Asi como los archivos:
- package.json: donde se alojan las configuraciones de la aplicacion
-cliente_uber.js: donde se encuentra la codificacion de la aplicacion.

## ARCHIVO "cliente_uber.js"
En este archivo encontramos las siguientes secciones.
- [MODULOS UTILIZADOS](#MODULOS-UTILIZADOS)
- [CONFIGURACION DEL SERVIDOR](#CONFIGURACION-DEL-SERVIDOR)
- [RUTAS](#RUTAS)
- [SERVIDOR](#servidor)

## MODULOS UTILIZADOS

1. express
2. http
3. bodyParser
4. request
5. jade

## CONFIGURACION DEL SERVIDOR

Se configura el servidor para que utilice el modulo bodyparser para procesar la informacion que se envia, que el motor de vista sea jade y que la ruta donde se busquen los archivos estaticos sea la de /public.


## RUTAS

- RUTA = "/": 
    Metodo: Get.
    Descripcion: Es la ruta donde se lleva a cabo la peticion de un nuevo servico
- Ruta = "/call":
    Metodo: Post.
    Descripcion: Es a donde se redirige para hacer la solicitud al ESB, donde se recibe la aprobacion del servicio.

## SERVIDOR

Se crea una servidor para que acepte las solicitudes de los consumidores de las APIs, a través del puerto 7070.

---

# DESCRIPCION PARA EL USUARIO

Para hacer uso de la aplicacion ingresar en el navegador de preferencia la direccion:
```html
    http://localhost:7070/
```
Donde se visualiza una pagina que simula que ya hemos pasado por el login y estamos preparados para pedir un viaje.

![principal](https://raw.githubusercontent.com/jpamela2604/SoftwareAvanzado_Tarea2-3/master/uber/frontend%20cliente/principal.PNG)

Una vez estemos en esta ruta llenamos ambos campos (latitud y altitud) los cuales son obligatorios, dichos campos indican el destino.
Una vez estemos seguros dar click al boton buscar viaje.

![IngresoDatos](https://raw.githubusercontent.com/jpamela2604/SoftwareAvanzado_Tarea2-3/master/uber/frontend%20cliente/IngresoDatos.PNG)

Si no hubo ningun problema interno podremos observar un mensaje como el siguiente donde se nos notifique que piloto esta asignado para el viaje.

![exito](https://raw.githubusercontent.com/jpamela2604/SoftwareAvanzado_Tarea2-3/master/uber/frontend%20cliente/exito.PNG)

De lo contrario nos mostrara un mensaje parecido al siguiente:

![error](https://raw.githubusercontent.com/jpamela2604/SoftwareAvanzado_Tarea2-3/master/uber/frontend%20cliente/error.PNG)
