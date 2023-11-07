const db = require('../../db')

const updateCurrentGame = async (data, userID) => {

    const { score, level, speed, status, id, snake, food, foodEatenCount, direction} = data;

    const { rows } = await db.query(`
        UPDATE games
        SET score=$1, "level"=$2, speed=$3, 
            status=$4::character varying, snake=$5, food=$6, eaten_food=$7, direction=$8
        WHERE game_id=$9 
            AND 
                fk_user_id=$10
        RETURNING game_id, date, score, level, speed, status, fk_user_id ;`,
            [score, level, speed, status, snake, food, foodEatenCount, direction, id, userID ]
    );

    const updatedGame = rows[0];
    
    return updatedGame;
}

module.exports = updateCurrentGame;