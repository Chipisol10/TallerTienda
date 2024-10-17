import {  Router } from "express";//importamos Router de express
import allProducto from "../controllers/producto/readProducto.js";// importamos al controlador 

const router = Router()



router.get('/all', allProducto)

export default router