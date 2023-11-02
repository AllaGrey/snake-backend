const { ctrlWrapper, HttpError } = require("../../helpers");
const db = require("../../db");
const { getToken } = require("../../services/auth");

const login = async (req, res) => {
    const { user_email: email, user_id: id } = req.user;

    const accessToken = await getToken(id);

    const { rows: updUser } = await db.query(`
    UPDATE users 
    SET token=$1 
    WHERE user_email=$2
    RETURNING user_name, user_email, token`,
        [accessToken, email]);

    const { user_name: name, user_email: dbEmail, token: dbToken } = updUser[0];
    
    res.status(200).json({
    user: {
        name,
        email: dbEmail,
    },
    token: dbToken
    });
}

module.exports = {
    login: ctrlWrapper(login)
}
