const { ctrlWrapper } = require("../../helpers");
const { updateCurrentGame } = require('../../services/games');

const updateGame = async (req, res) => {

    const { user_id: userID } = req.user;
    const { game } = req;

    const updatedGame = await updateCurrentGame(game, userID);

    res.status(200).json({
        updatedGame
    });
};

module.exports = {
    updateGame: ctrlWrapper(updateGame),
};