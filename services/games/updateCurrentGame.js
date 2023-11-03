const db = require('../../db')

const updateCurrentGame = async (data, userID) => {

    const { score, level, speed, status, id} = data;

    const { rows } = await db.query(`
        UPDATE games
        SET score=$1, "level"=$2, speed=$3, 
            status=$4::character varying
        WHERE game_id=$5 
            AND 
                fk_user_id=$6
        RETURNING game_id, date, score, level, speed, status, fk_user_id ;`,
            [score, level, speed, status, id, userID]
    );

    const updatedGame = rows[0];
    
    return updatedGame;
}

module.exports = updateCurrentGame;