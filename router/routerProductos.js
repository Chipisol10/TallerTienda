import {  Router } from "express";//importamos Router de express
import {allProducto,tipoProducto,precioProducto} from "../controllers/producto/readProducto.js";// importamos al controlador


const router = Router()



router.get('/all', allProducto)
router.get('/tipo/:tipo', tipoProducto)
router.get('/precio/:precio', precioProducto)

export default router