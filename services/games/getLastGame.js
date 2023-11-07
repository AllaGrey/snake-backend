const db = require('../../db')

const getLastGame = async (userID) => {

    const { rows } = await db.query(`
        SELECT *
        FROM games
        WHERE fk_user_id=$1 
            AND 
                status='in progress'
            AND 
                date = (SELECT MAX(date) FROM games WHERE fk_user_id = $1 AND status = 'in progress')`,
            [userID]
    );

    const lastGame = rows[0];
    
    return lastGame;
}

module.exports = getLastGame;
