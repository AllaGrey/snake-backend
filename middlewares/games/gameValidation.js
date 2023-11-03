const { gameDataValidation } = require('../../services/games');
const { HttpError } = require("../../helpers");

const gameValidation = async (req, res, next) => {

    const { value, error } = gameDataValidation(req.body);

    if (error) next(HttpError(400, error.message));

    req.game = value;

    next();
}

module.exports = gameValidation;