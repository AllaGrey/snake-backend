const { ctrlWrapper } = require("../../helpers"); 

const getTotalScores = async (req, res) => {

    // const {user_name: name, user_email: email, token} = req.user

    // res.status(200).json({
    //     user: {
    //         name,
    //         email
    //     },
    //     token
    // });
};

module.exports = {
    getTotalScores: ctrlWrapper(getTotalScores),
};