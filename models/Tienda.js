import { Schema, model } from "mongoose";// importamos solo una parte mongoose
//Creamos un esquema 
let collection = "tiendas"
let shema = new Schema({
    nombre:{type:String,required:true},
    direccion:{type:String,required:true},
    telefono:{type:Number,required:true},
},{
  timestamps:true  
})

let Tienda = model(collection,shema)// un modelo tiene la coleccion y el esquema que tiene.

export default Tienda