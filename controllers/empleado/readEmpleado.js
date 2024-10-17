import Empleado from "../../models/Empleado.js" //importamos el modelo


let allEmpleado = async (req, res) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
    
}

export default allEmpleado