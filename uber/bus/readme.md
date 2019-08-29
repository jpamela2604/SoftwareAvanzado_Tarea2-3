# Contenido
Esta carpeta contiene el proyecto de mulesoft con el cual se configuro el bus, el cual fue implementado en .

## Diagrama de interraccion

![bus](https://raw.githubusercontent.com/jpamela2604/SoftwareAvanzado_Tarea2-3/tarea4/uber/bus/busLogic.PNG)


> **Listener**. 


       Recibe y devuelve las peticiones que llegan al bus.

       Ruta:/bus
       Puerto:8081

> **Request**. 


        Envia y recibe el servicio que le corresponde al codigo de pais 502.


> **Choice:**. 


        Elmento que permite validar evaluando que si dentro del elemento POST el atributo pais seria igual a "X" codigo para redireccionarno a donde le corresponde.


## CONCLUSION

Si este fuera una aplicacion real en el elemento "choices" habrian muchas mas opciones dependiendo de a cuantos paises la aplicacion llega.