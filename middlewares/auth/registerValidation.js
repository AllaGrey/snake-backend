const { registerDataValidation } = require("../../services/auth");
const { HttpError } = require("../../helpers");
const db = require("../../db");

const registerValidation = async (req, res, next) => {
    const { value, error } = registerDataValidation(req.body);

    if (error) next(HttpError(400, error.message));

    const { rowCount: user } = await db.query(`
        SELECT
        FROM users
        WHERE user_email=$1`,
        [value.email]
    );

    if (user > 0) next(HttpError(409, `Email ${value.email} is already in use`));
    
    next();
};

module.exports = registerValidation;