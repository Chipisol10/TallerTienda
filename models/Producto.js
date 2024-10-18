import { Schema, model } from "mongoose"

let collection = "productos"
let shema = new Schema({
    marca:{type:String,required:true},
    tipo:{type:String,required:true},
    precio:{type:Number,required:true},
},{
  timestamps:true  
})

let Producto = model(collection,shema)

export default Producto