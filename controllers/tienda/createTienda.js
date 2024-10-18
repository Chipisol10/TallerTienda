import Tienda from "../../models/Tienda.js"

let create = async (req, res, next) => {
    try {
        let tienda = req.body
        let all = await Tienda.create(tienda)
      
        return res.status(201).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}

let createMany = async (req, res, next) => {
    try {
       let tiendaVarias = req.body
       let all = await Tienda.insertMany(tiendaVarias)

       return res.status(201).json({
        response:all
       })
    } catch (error) {
        next(error)
    }
}

export {create, createMany}