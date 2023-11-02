const { ctrlWrapper } = require("../../helpers");
const db = require("../../db");
const { createHashPassword, getToken } = require("../../services/auth");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashPassword = await createHashPassword(password);
    const { accessToken } = await getToken(email);

    const { rows: newUser } = await db.query(`
        INSERT INTO users (user_id, user_name, user_email, user_password, token) 
        values ($1, $2, $3, $4, $5) 
        RETURNING user_id, user_name, user_email, user_password, token`,
        ['qwerty12345', name, email, hashPassword, accessToken]
    );

    const { user_name: dbName, user_email: dbEmail, token } = newUser[0];
    
    res.status(200).json({
        user: {
            dbName,
            dbEmail
        },
        token
    })
}

module.exports = {
    register: ctrlWrapper(register)
}
