import {  Router } from "express";//importamos Router de express
import {allProducto,marcaProducto,tipoProducto,precioProducto} from "../controllers/producto/readProducto.js";// importamos al controlador
import { create,createMany } from "../controllers/producto/createProducto.js"

const router = Router()



router.get('/all', allProducto)
router.get('/marca/:marca',marcaProducto)
router.get('/tipo/:tipo', tipoProducto)
router.get('/precio/:precio', precioProducto)
router.post('/create', create)
router.post('/createMany', createMany)

export default router