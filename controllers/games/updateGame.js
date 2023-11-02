const { ctrlWrapper } = require("../../helpers"); 

const updateGame = async (req, res) => {

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
    updateGame: ctrlWrapper(updateGame),
};