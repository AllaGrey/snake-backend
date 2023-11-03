const Joi = require("joi");

const gameDataValidation = (data) => {
    return Joi.object().options({ abortEarly: false }).keys({
        id: Joi.number().integer().greater(0).required().messages({
            'number.base': 'The id field must be a number',
            'any.required': 'The id field is required',
            'number.negative': 'The id field must be greater then 0',
            'number.integer': 'The id field must be an integer',
        }),
        score: Joi.number().integer().greater(0).required().messages({
            'number.base': 'The score field must be a number',
            'any.required': 'The score field is required',
            'number.negative': 'The score field must be greater then 0',
            'number.integer': 'The score field must be an integer',
        }),
        level: Joi.number().integer().greater(0).required().messages({
            'number.base': 'The level field must be a number',
            'any.required': 'The level field is required',
            'number.negative': 'The level field must be greater then 0',
            'number.integer': 'The level field must be an integer',
        }),
        speed: Joi.number().integer().greater(0).required().messages({
            'number.base': 'The speed field must be a number',
            'any.required': 'The speed field is required',
            'number.negative': 'The speed field must be greater then 0',
            'number.integer': 'The speed field must be an integer',
        }),
        status: Joi.string().valid('in progress', 'finished').required().messages({
            'string.base': 'The status field must be a string',
            'any.only': 'The status field must be one of "in progress" or "finished"',
            'any.required': 'The status field is required'
        })
    })
        .validate(data)    
}

module.exports = gameDataValidation;