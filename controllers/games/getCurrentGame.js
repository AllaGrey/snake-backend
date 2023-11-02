const { ctrlWrapper } = require("../../helpers"); 

const getCurrentGame = async (req, res) => {

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
    getCurrentGame: ctrlWrapper(getCurrentGame),
};