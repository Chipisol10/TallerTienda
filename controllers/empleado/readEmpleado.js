import Empleado from "../../models/Empleado.js" //importamos el modelo


let allEmpleado = async (req, res, next) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
    
}
let nombreEmpleado =  async (req, res, next) => {
    try {
        let nombreQuery = req.params.nombre
        let all = await Empleado.find({nombre:nombreQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
}


let cargoEmpleado =  async (req, res, next) => {
    try {
        let cargoQuery = req.params.cargo
        let all = await Empleado.find({cargo:cargoQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
}

let salarioEmpleado =  async (req, res, next) => {
    try {
        let salarioQuery = req.params.salario
        let all = await Empleado.find({salario:salarioQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
}

export  {allEmpleado,nombreEmpleado,cargoEmpleado,salarioEmpleado}