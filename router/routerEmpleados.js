import {  Router } from "express";//importamos Router de express
import allEmpleado from "../controllers/empleado/readEmpleado.js";// importamos al controlador 

const router = Router()



router.get('/all', allEmpleado)

export default router