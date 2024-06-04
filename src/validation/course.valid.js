import Joi from 'joi';


export const courseValidation = async (body) => {
    const validSchema = Joi.object({
        id: Joi.string(),
        title: Joi.string(),
        description: Joi.string()
    })

    const {error, value} = validSchema.validate(body);
    if(error){
        throw error;
    };
    return value
}