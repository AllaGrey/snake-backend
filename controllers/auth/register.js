const { ctrlWrapper } = require("../../helpers");

const register = async (req, res) => {
    console.log('this is register');
    
    res.status(200).json('ok')
}

module.exports = {
    register: ctrlWrapper(register)
}
