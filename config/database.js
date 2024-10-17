import mongoose from "mongoose"; // importamos mongoose desde mongoose

let url = process.env.URI_MONGO//variable de entorno guardada en .env

console.log(url);

// forma de conectarse a la base de datos
// Forma generica de conectarse con JavaScript

// mongoose.connect(url)
// .then(()=> console.log("base de datos conectada"))
// .catch(error => console.log(error))

// Otra forma de conectarse a la base de datos try y catch

async function coneccionBaseDeDatos(){
 try {
   await mongoose.connect(process.env.URI_MONGO)
    console.log("Base de datos conectada");
 } catch (error) {
    console.log(error);
 }
}
coneccionBaseDeDatos()