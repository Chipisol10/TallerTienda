import { Schema, model } from "mongoose";// importamos solo una parte mongoose
//Creamos un esquema 
let collection = "empleado"
let shema = new Schema({
    nombre:{type:String,required:true},
    cargo:{type:String,required:true},
    salario:{type:Number,required:true},
},{
  timestamps:true  
})

let Empleado = model(collection,shema)// un modelo tiene la coleccion y el esquema que tiene.

export default Empleado