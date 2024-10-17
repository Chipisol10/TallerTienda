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



export default allProducto