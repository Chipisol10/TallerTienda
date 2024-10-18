import Tienda from "../../models/Tienda.js" //importamos el modelo


let allTienda = async (req, res, next) => {
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
    
}

let nombreTienda =  async (req, res, next) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Tienda.find({nombre:nombreQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
       next(error)
    }
}

let direccionTienda =  async (req, res, next) => {
    try {
        let direccionQuery = req.params.direccion
        let all = await Tienda.find({direccion:direccionQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        
            next(error)
    }
}

let telefonoTienda =  async (req, res,next) => {
    try {
        let telefonoQuery = req.params.telefono
        let all = await Tienda.find({telefono:telefonoQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
       next(error)
    }
}

export {allTienda,nombreTienda,direccionTienda,telefonoTienda} 