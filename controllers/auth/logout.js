const { ctrlWrapper } = require("../../helpers");

const logout = async (req, res) => {
    console.log('this is logout');
    
    res.status(200).json('ok')
}

module.exports = {
    logout: ctrlWrapper(logout)
}
