const { ctrlWrapper } = require("../../helpers"); 
const { addNewGame } = require('../../services/games');

const addGame = async (req, res) => {

    const { user_id: id } = req.user;

    const newGame = await addNewGame(id);

    res.status(200).json(
        newGame
    );
};

module.exports = {
    addGame: ctrlWrapper(addGame),
};