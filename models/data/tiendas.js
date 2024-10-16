//Para poder traer las variables de entornos
import 'dotenv/config.js'
//Para conectarse a la base de datos 
import '../../config/database.js'
//Conectarme con el Modelo
import Tienda from '../Tienda.js'

const tiendas = [
    {
      nombre: "Tienda Uno",
      direccion: "Calle 123, Ciudad A",
      telefono: 1234567890
    },
    {
      nombre: "Tienda Dos",
      direccion: "Avenida 456, Ciudad B",
      telefono: 9876543210
    },
    {
      nombre: "Tienda Tres",
      direccion: "Calle 789, Ciudad C",
      telefono: 1122334455
    },
    {
      nombre: "Tienda Cuatro",
      direccion: "Avenida 101, Ciudad D",
      telefono: 2233445566
    },
    {
      nombre: "Tienda Cinco",
      direccion: "Calle 202, Ciudad E",
      telefono: 3344556677
    }
  ];
// Con insertMany se agrega todo en la base de datos 
Tienda.insertMany(tiendas)
  