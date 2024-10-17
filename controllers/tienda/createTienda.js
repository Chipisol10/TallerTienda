import Tienda from "../../models/Tienda.js";//importamos el modelo 

let create = async (req, res) => {
    try {
        let tienda = req.body
        let all = await Tienda.create(tienda)
      
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
       let tiendaVarias = req.body
       let all = await Tienda.insertMany(tiendaVarias)

       return res.status(201).json({
        response:all
       })
    } catch (error) {
        return res.status(500).json({
            response:error
        })
    }
}

export {create, createMany}