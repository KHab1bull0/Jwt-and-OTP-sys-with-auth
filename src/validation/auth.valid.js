import Joi from "joi";

export const userValidation = async (body) => {

    const uservalid = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(10).required(),
    });

    const { error, value } = uservalid.validate(body);

    if (error) {
        throw error;
    };

    return value
};