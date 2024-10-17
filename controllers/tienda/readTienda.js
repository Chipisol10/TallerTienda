import Tienda from "../../models/Tienda.js" //importamos el modelo


let allTienda = async (req, res) => {
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

let nombreTienda =  async (req, res) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Tienda.find({nombre:nombreQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let direccionTienda =  async (req, res) => {
    try {
        let direccionQuery = req.params.direccion
        let all = await Tienda.find({direccion:direccionQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export {allTienda,nombreTienda,direccionTienda} 