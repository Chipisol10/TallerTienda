import express from "express";//Empezar a utilizar express esta en el carpeta node_modules
import "dotenv/config.js"//Importamos la libreria dotenv
import "./config/database.js"// ojo con las importaciones el orden es muy importante.
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from "./router/index.js"
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";


const server = express() // Creamos una variable por buenas practicas se le coloca el nombre server que contiene todo el express()

const PORT = process.env.PORT || 8080 //Creamos una variable donde se va a correr nuestra aplicacion en el Backend se utiliza el puerto 8080 pero esta esta guardada en el archivo .env

const ready = () => console.log("server ready in port = "+PORT);

//Configuramos cuatros middlewares 

server.use(express.json())// se utiliza para responder o recibir en formato json

server.use(express.urlencoded({ extended: true}))// se utiliza para poder recibir parametros y querys

server.use(cors())

server.use(morgan('dev'))//morgan se utilizar para controlar la peticiones que nos hagan


//router 

server.use('/api',indexRouter)
server.use(not_found_handler)
server.use(error_handler)



server.listen(PORT,ready)//Levantamos el servidor, utilizamos la propiedad listen para escucha, el puerto 8080. 



