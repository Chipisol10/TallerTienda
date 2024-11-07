import joi from "joi-oid";

const schema = joi.object({
    marca:joi.string().required().alphanum().messages({
        'string.base':'Disculpe debe colocar solos letras'
    }),
    tipo:joi.string().required(),
    precio:joi.number().required()
})

export default schema