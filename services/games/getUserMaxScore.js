const db = require('../../db');

const getUserMaxScore = async (userID) => {
    const { rows } = await db.query(`
        SELECT score, level, speed, status, fk_user_id   
        FROM games
        WHERE fk_user_id = $1 
            AND score = (SELECT MAX(score) FROM games WHERE fk_user_id = $1)`,
            [userID]
    );

    const scores = rows[0];
    
    return scores;
}

module.exports = getUserMaxScore;