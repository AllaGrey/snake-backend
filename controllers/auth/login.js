const { ctrlWrapper } = require("../../helpers");

const login = async (req, res) => {
    console.log('this is login');
    
    res.status(200).json('ok')
}

module.exports = {
    login: ctrlWrapper(login)
}
