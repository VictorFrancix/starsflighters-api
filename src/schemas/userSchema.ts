import Joi from "joi";

export const userSchema: object = Joi.object({
    firstUser: Joi.string().required(),
    secondUser: Joi.string().required()
});