import {  Router } from "express"
import {allProducto,marcaProducto,tipoProducto,precioProducto} from "../controllers/producto/readProducto.js"
import { create,createMany } from "../controllers/producto/createProducto.js"
import validator from "../middlewares/validator.js"
import shemaProductosCreate from "../shemas/productos/createProducto.js"

const router = Router()



router.get('/all', allProducto)
router.get('/marca/:marca',marcaProducto)
router.get('/tipo/:tipo', tipoProducto)
router.get('/precio/:precio', precioProducto)
router.post('/create',validator(shemaProductosCreate), create)
router.post('/createMany', createMany)

export default router