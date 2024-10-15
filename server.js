import express, { request, response } from "express";//Empezar a utilizar express esta en el carpeta node_modules
import "dotenv/config.js"//Importamos la libreria dotenv
import "./config/database.js"// ojo con las importaciones el orden es muy importante.

const server = express() // Creamos una variable por buenas practicas se le coloca el nombre server que contiene todo el express()

const PORT = process.env.PORT || 8080 //Creamos una variable donde se va a correr nuestra aplicacion en el Backend se utiliza el puerto 8080 pero esta esta guardada en el archivo .env

const ready = () => console.log("server ready in port = "+PORT);
//Creacion de Endpoints
server.get('/',(request,response)=>{
    response.send('Hola mundo en Express')
})

server.get('/saludo',(request,response)=>{
    response.send('Hola bienvenido al mundo de Express')
})



server.listen(PORT,ready)//Levantamos el servidor, utilizamos la propiedad listen para escucha, el puerto 8080. 

//console.log(process.env.PORT); para saber las variables de entorno.