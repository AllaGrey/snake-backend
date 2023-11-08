const Joi = require("joi");

const gameDataValidation = (data) => {
    return Joi.object().options({ abortEarly: false }).keys({
        game_id: Joi.number().integer().greater(0).required().messages({
            'number.base': 'The id field must be a number',
            'any.required': 'The id field is required',
            'number.negative': 'The id field must be greater then 0',
            'number.integer': 'The id field must be an integer',
        }),
        score: Joi.number().integer().required().messages({
            'number.base': 'The score field must be a number',
            'any.required': 'The score field is required',
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
        status: Joi.string().valid('in progress', 'paused', 'finished').required().messages({
            'string.base': 'The status field must be a string',
            'any.only': 'The status field must be one of "in progress", "paused" or "finished"',
            'any.required': 'The status field is required'
        }),
        snake: Joi.array()
            .items(
                Joi.object({
                    x: Joi.number().required().messages({
                        'number.base': 'The x coordinate must be a number',
                        'any.required': 'The x coordinate is required',
                    }),
                    y: Joi.number().required().messages({
                        'number.base': 'The y coordinate must be a number',
                        'any.required': 'The y coordinate is required',
                    }),
                })
            )
            .required().messages({
                'array.base': 'The snake field must be an array',
                'array.required': 'The snake field is required',
            }),
        food: Joi.object({
            x: Joi.number().required().messages({
                'number.base': 'The x coordinate must be a number',
                'any.required': 'The x coordinate is required',
            }),
            y: Joi.number().required().messages({
                'number.base': 'The y coordinate must be a number',
                'any.required': 'The y coordinate is required',
            }),
        }).required().messages({
            'object.base': 'The food field must be an object',
            'object.required': 'The food field is required',
        }),
        direction: Joi.string().valid('UP', 'DOWN', 'LEFT', 'RIGHT').required().messages({
            'string.base': 'The direction field must be a string',
            'any.only': 'The direction field must be one of "UP", "DOWN", "LEFT", or "RIGHT"',
            'any.required': 'The direction field is required',
        }),
        eaten_food: Joi.number().integer().required().messages({
            'number.base': 'The eaten_food field must be a number',
            'any.required': 'The eaten_food field is required',
            'number.integer': 'The eaten_food field must be an integer',
        }),
        fk_user_id: Joi.string().required().messages({
            'string.base': 'The fk_user_id field must be a string',
            'any.required': 'The fk_user_id field is required',
        }),
        date: Joi.date().required().messages({
            'date.base': 'The date field must be a valid date',
            'any.required': 'The date field is required',
        })
    })
        .validate(data)    
}

module.exports = gameDataValidation;