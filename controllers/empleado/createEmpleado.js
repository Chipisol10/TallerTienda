import { response } from "express"
import Empleado from "../../models/Empleado.js"

let create = async (req, res) => {
    try {
        let empleado = req.body 
        let all = await Empleado.create(empleado)

        return res.status(201).json({
            response:all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res) => {
    try {
       let empleadoVarios = req.body
       let all = await Empleado.insertMany(empleadoVarios)

       return res.status(201).json({
        response:all
       })
    } catch (error) {
        return res.status(500).json({
            response:error
        })
    }
}

export {create,createMany}