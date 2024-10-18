const bad_request = (error,req,res,next) => {
    console.log(error)
    return res.status(400).json({
            success: false,
            response: error,
            message:"Error falta de sintaxis en la aplicacion"
    })
}

export default bad_request