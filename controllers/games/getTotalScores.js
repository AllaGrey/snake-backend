const { ctrlWrapper } = require("../../helpers"); 
const { getScores, getUserMaxScore } = require('../../services/games');

const getTotalScores = async (req, res) => {

    const { user_id: id } = req.user;

    const topScores = await getScores();
    const userMaxScore = await getUserMaxScore(id);

    res.status(200).json(
        userMaxScore,
        topScores
    );
};

module.exports = {
    getTotalScores: ctrlWrapper(getTotalScores),
};