import joi from "joi-oid";

const schema = joi.object({
    nombre:joi.string().required().alphanum().messages({
        'string.base':'Disculpe debe colocar solos letras'
    }),
    cargo:joi.string().required(),
    salario:joi.number().required()
})

export default schema