const { ctrlWrapper } = require("../../helpers"); 
const { getLastGame } = require('../../services/games');

const getCurrentGame = async (req, res) => {

    const { user_id: id } = req.user;

    const currentGame = await getLastGame(id);

    res.status(200).json(
        currentGame
    );
};

module.exports = {
    getCurrentGame: ctrlWrapper(getCurrentGame),
};