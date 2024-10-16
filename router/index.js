//Se encarga de todas las rutas
import { Router } from "express";
import routerTienda from './routerTiendas.js'

const router = Router()

router.use('/routerTiendas',routerTienda)

export default router