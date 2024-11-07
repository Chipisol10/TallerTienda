import {  Router } from "express"
import {allTienda,nombreTienda,direccionTienda,telefonoTienda} from "../controllers/tienda/readTienda.js"
import { create,createMany } from "../controllers/tienda/createTienda.js" 
import validator from "../middlewares/validator.js";
import shemaTiendasCreate from "../shemas/tiendas/create.js"

const router = Router()



router.get('/all', allTienda)
router.get('/nombre/:nombre', nombreTienda)
router.get('/direccion/:direccion', direccionTienda)
router.get('/telefono/:telefono', telefonoTienda)
router.post('/create',validator(shemaTiendasCreate), create)
router.post('/createMany', createMany)


export default router
