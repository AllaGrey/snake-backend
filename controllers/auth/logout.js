const { ctrlWrapper } = require("../../helpers");
const db = require('../../db');

const logout = async (req, res) => {
    const { user_id: id } = req.user;
    
    const { rows } = await db.query(`
        UPDATE users
        SET token=NULL
        WHERE user_id=$1
        RETURNING user_id, user_name, user_email, token`,
        [id]
    );

    res.status(204).json({ rows });
};

module.exports = {
    logout: ctrlWrapper(logout)
}
