const db = require('../../db');

const getScores = async (userID) => {
    const { rows } = await db.query(`            
        SELECT users.user_name AS user, games.score
        FROM games
        INNER JOIN users ON games.fk_user_id = users.user_id
        ORDER BY games.score DESC
        LIMIT 3;    
            `
    );

    const scores = rows;
    
    return scores;
}

module.exports = getScores;