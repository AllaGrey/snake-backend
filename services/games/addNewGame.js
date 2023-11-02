const db = require('../../db');


const addNewGame = async (userID) => {
    // const {snakeCoords, s} = gameData

    const { rows } = await db.query(`
        INSERT INTO 
            games (fk_user_id)
            values ($1)
        RETURNING
            fk_user_id`,
            [userID]
    );

    const game = rows[0];
    
    return game;
}

module.exports = addNewGame;