const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

module.exports.createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().min(3).max(50).required().trim().strict().messages({
      'string.base': 'Title must be a string',
      'string.empty': 'Title cannot be empty',
      'string.min': 'Title must be at least 3 characters long',
      'string.max': 'Title must not exceed 50 characters',
      'any.required': 'Title is required',
      'string.trim': 'Title cannot have leading or trailing spaces'
    }),
    description: Joi.string()
      .min(3)
      .max(256)
      .required()
      .trim()
      .strict()
      .messages({
        'string.base': 'Description must be a string',
        'string.empty': 'Description cannot be empty',
        'string.min': 'Description must be at least 3 characters long',
        'string.max': 'Description must not exceed 256 characters',
        'any.required': 'Description is required',
        'string.trim': 'Description cannot have leading or trailing spaces'
      })
  });
  try {
    await correctCondition.validateAsync(req.body, {
      abortEarly: false
    });
    next();
  } catch (error) {
    console.log('Error in board validation:', error);
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      status: 'error',
      message: new Error(error).message
    });
  }
};
