const db = require('../../db');


const addNewGame = async (userID) => {

    const { rows } = await db.query(`
        INSERT INTO 
            games (fk_user_id)
            values ($1)
        RETURNING *`,
            [userID]
    );

    const game = rows[0];
    
    return game;
}

module.exports = addNewGame;