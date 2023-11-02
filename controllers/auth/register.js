const { ctrlWrapper } = require("../../helpers");
const db = require("../../db");
const { v4: uuidv4 } = require("uuid");
const { createHashPassword, getToken } = require("../../services/auth");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const id = uuidv4(); 

    const hashPassword = await createHashPassword(password);
    const accessToken = await getToken(id);

    const { rows: newUser } = await db.query(`
        INSERT INTO users (user_id, user_name, user_email, user_password, token) 
        values ($1, $2, $3, $4, $5)  
        RETURNING user_id, user_name, user_email, user_password, token`,
        [id, name, email, hashPassword, accessToken]
    );

    const { user_name: dbName, user_email: dbEmail, token } = newUser[0];
    
    res.status(200).json({
        user: {
            name: dbName,
            email: dbEmail
        },
        token
    })
}

module.exports = {
    register: ctrlWrapper(register)
}
