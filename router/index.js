//Se encarga de todas las rutas
import { Router } from "express";
import routerTienda from './routerTiendas.js'
import routerProducto from './routerProductos.js'
import routerEmpleado from './routerEmpleados.js'

const router = Router()

router.use('/routerTiendas', routerTienda)
router.use('/routerProductos', routerProducto)
router.use('/routerEmpleados', routerEmpleado)

export default router