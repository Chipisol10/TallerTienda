import {  Router } from "express";//importamos Router de express
import {allEmpleado,nombreEmpleado,cargoEmpleado,salarioEmpleado} from "../controllers/empleado/readEmpleado.js";// importamos al controlador 
import { create,createMany } from "../controllers/empleado/createEmpleado.js"

const router = Router()



router.get('/all', allEmpleado)
router.get('/nombre/:nombre', nombreEmpleado)
router.get('/cargo/:cargo', cargoEmpleado)
router.get('/salario/:salario', salarioEmpleado)
router.post('/create', create)
router.post('/createMany',createMany)

export default router