import {  Router } from "express";//importamos Router de express
import {allEmpleado,cargoEmpleado,salarioEmpleado} from "../controllers/empleado/readEmpleado.js";// importamos al controlador 

const router = Router()



router.get('/all', allEmpleado)
router.get('/cargo/:cargo', cargoEmpleado)
router.get('/salario/:salario', salarioEmpleado)

export default router