import { Schema, model } from "mongoose"

let collection = "empleado"
let shema = new Schema({
    nombre:{type:String,required:true},
    cargo:{type:String,required:true},
    salario:{type:Number,required:true},
},{
  timestamps:true  
})

let Empleado = model(collection,shema)

export default Empleado