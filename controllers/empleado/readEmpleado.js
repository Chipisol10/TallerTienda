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

let cargoEmpleado =  async (req, res) => {
    try {
        let cargoQuery = req.params.cargo
        let all = await Empleado.find({cargo:cargoQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let salarioEmpleado =  async (req, res) => {
    try {
        let salarioQuery = req.params.salario
        let all = await Empleado.find({salario:salarioQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export  {allEmpleado,cargoEmpleado,salarioEmpleado}