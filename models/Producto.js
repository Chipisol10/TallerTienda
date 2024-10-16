import { Schema, model } from "mongoose";// importamos solo una parte mongoose
//Creamos un esquema 
let collection = "productos"
let shema = new Schema({
    marca:{type:String,required:true},
    tipo:{type:String,required:true},
    precio:{type:Number,required:true},
},{
  timestamps:true  
})

let Producto = model(collection,shema)// un modelo tiene la coleccion y el esquema que tiene.

export default Producto