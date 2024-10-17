import {  Router } from "express";//importamos Router de express
import {allTienda,nombreTienda,direccionTienda} from "../controllers/tienda/readTienda.js";// importamos al controlador 
import { create } from "../controllers/tienda/createTienda.js"

const router = Router()



router.get('/all', allTienda)
router.get('/nombre/:nombre', nombreTienda)
router.get('/direccion/:direccion', direccionTienda)
router.post('/create', create)


export default router
