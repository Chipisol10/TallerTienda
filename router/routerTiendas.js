import {  Router } from "express"
import {allTienda,nombreTienda,direccionTienda,telefonoTienda} from "../controllers/tienda/readTienda.js"
import { create,createMany } from "../controllers/tienda/createTienda.js" 

const router = Router()



router.get('/all', allTienda)
router.get('/nombre/:nombre', nombreTienda)
router.get('/direccion/:direccion', direccionTienda)
router.get('/telefono/:telefono', telefonoTienda)
router.post('/create', create)
router.post('/createMany', createMany)


export default router
