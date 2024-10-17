import Producto from "../../models/Producto.js";

let create = async (req, res) => {
    try {
        let producto = req.body
        let all = await Producto.create(producto)

        return res.status(201).json({
            response:all

        })
    } catch (error) {
        return res.status (500).json({
            response: error
        })
    }
}

let createMany = async (req, res) => {
    try {
       let productoVarios = req.body
       let all = await Producto.insertMany(productoVarios)

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