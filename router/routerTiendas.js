import {  Router } from "express";//importamos Router de express
import Tienda from "../models/Tienda.js"

const router = Router()

console.log("Entra a tienda")

router.get('/all',
    async (req, res) => {
        try {
            let all = await Tienda.find()
            return res.status(200).json({
                response: all
            })
            
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }
        
    }
)

export default router
