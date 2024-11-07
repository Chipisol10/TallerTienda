const validator = (shema) => [
    (req,res,next) => {
        const validation = shema.validate(req.body,{abortEarly:false})
        if (validation.error) {
            return res.status(400).json({
                sucess:false,
                message: validation.error.details.map(error => error.message)
            })
        }
        return next()
    }
 ]

 export default validator