const bad_request = (error,req,res,next) => {
    console.log(error)
    return res.status(400).json({
            success: false,
            response: error,
            message:"Error falta de sintaxis incorrecta, datos incompletos o mal formateados o falta de ciertos parametros requeridos"
    })
}

export default bad_request