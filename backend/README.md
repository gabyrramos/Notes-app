# Backend - To-Do Notes API
Este es el backend para la aplicación de To-Do Notes, desarrollado con Node.js y Express. Esta API maneja las solicitudes para gestionar tareas, permitiendo crear, leer, actualizar y eliminar notas.

## Requisitos

Node.js: Para ejecutar el servidor de la API.
npm: Para manejar las dependencias del proyecto.


## Instalación

git clone <https://github.com/gabyrramos/Todo-App.git>

## Instalar dependencias:

Dirígete a la carpeta del proyecto en tu terminal y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

npm install

## Configuración del Servidor
La API corre por defecto en el puerto 3000. 

## Ejecutar la API
Para ejecutar el servidor, usa el siguiente comando:

npm start
Esto arrancará el servidor de Express en el puerto 3000. Si todo está configurado correctamente, deberías ver un mensaje en la terminal como este:

Server is running on http://localhost:3000


## Rutas Disponibles
- GET /
Obtiene todas las tareas disponibles.

[
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "Pending"
  },
  {
    "id": 2,
    "title": "Walk the dog",
    "description": "Evening walk in the park",
    "status": "Pending"
  }
]
- GET /:id
Obtiene una tarea específica por su ID.

- POST /
Crea una nueva tarea.


- PUT /:id
Actualiza una tarea existente.


- DELETE /:id
Elimina una tarea específica por su ID.


## Base de datos
Opte por usar MongoDB como lugar para depositar la informacion 