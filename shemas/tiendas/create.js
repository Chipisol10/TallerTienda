import joi from "joi-oid";

const schema = joi.object({
    nombre:joi.string().required().alphanum().messages({
        'string.base':'Disculpe debe colocar solos letras'
    }),
    direccion:joi.string().required(),
    telefono:joi.number().required()
})

export default schema