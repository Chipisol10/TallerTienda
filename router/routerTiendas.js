import {  Router } from "express";//importamos Router de express
import {allTienda,nombreTienda,direccionTienda} from "../controllers/tienda/readTienda.js";// importamos al controlador 


const router = Router()



router.get('/all', allTienda)
router.get('/nombre/:nombre', nombreTienda)
router.get('/direccion/:direccion', direccionTienda)


export default router
