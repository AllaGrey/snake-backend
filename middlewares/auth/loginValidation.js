const { loginDataValidation } = require("../../services/auth");
const { HttpError } = require("../../helpers");
const db = require("../../db");
const bcrypt = require('bcrypt');

const loginValidation = async (req, res, next) => {
    const { value, error } = loginDataValidation(req.body);

    if (error) next(HttpError(400, error.message));

    const { rows: user } = await db.query(`
        SELECT user_id, user_name, user_email, user_password 
        FROM users 
        WHERE user_email=$1`,
        [value.email]
    )

    if (user.length === 0) next(HttpError(401, 'Email or password is wrong'));

    const { user_password: dbPassword } = user[0];

    const comparedPassword = await bcrypt.compare(req.body.password, dbPassword);

    if (!comparedPassword) next(HttpError(401, 'Email or password is wrong'));

    req.user = user[0];

    next()
}

module.exports = loginValidation;