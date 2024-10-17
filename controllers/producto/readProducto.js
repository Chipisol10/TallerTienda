import Producto from "../../models/Producto.js" //importamos el modelo


let allProducto = async (req, res) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}

let tipoProducto =  async (req, res) => {
    try {
        let tipoQuery = req.params.tipo
        let all = await Producto.find({tipo:tipoQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let precioProducto =  async (req, res) => {
    try {
        let direccionQuery = req.params.precio
        let all = await Producto.find({precio:precioQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export {allProducto,tipoProducto,precioProducto} 