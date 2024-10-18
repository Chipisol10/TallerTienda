import Producto from "../../models/Producto.js" //importamos el modelo


let allProducto = async (req, res, next) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
    
}
let marcaProducto =  async (req, res, next) => {
    try {
        let marcaQuery = req.params.marca
        let all = await Producto.find({marca:marcaQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
}

let tipoProducto =  async (req, res, next) => {
    try {
        let tipoQuery = req.params.tipo
        let all = await Producto.find({tipo:tipoQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
       next(error)
    }
}

let precioProducto =  async (req, res, next) => {
    try {
        let precioQuery = req.params.precio
        let all = await Producto.find({precio:precioQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
       next(error)
    }
}

export {allProducto,marcaProducto,tipoProducto,precioProducto} 