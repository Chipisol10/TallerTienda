const bag_request = (error,req,res,next) => {
    console.log(error)
    return res.status(400).json({
            success: false,
            response: error,
            message:"Error falta una propiedad"
    })
}

export default bag_request