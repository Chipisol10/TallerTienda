import {  Router } from "express"
import {allEmpleado,nombreEmpleado,cargoEmpleado,salarioEmpleado} from "../controllers/empleado/readEmpleado.js" 
import { create,createMany } from "../controllers/empleado/createEmpleado.js"
import validator from "../middlewares/validator.js"
import schemaEmpleadosCreate from "../shemas/empleados/createEmpleado.js"

const router = Router()



router.get('/all', allEmpleado)
router.get('/nombre/:nombre', nombreEmpleado)
router.get('/cargo/:cargo', cargoEmpleado)
router.get('/salario/:salario', salarioEmpleado)
router.post('/create',validator(schemaEmpleadosCreate), create)
router.post('/createMany',createMany)

export default router