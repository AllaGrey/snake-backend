const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { getCurrentUser } = require('./currentUser');


module.exports = {
    register,
    login,
    logout,
    getCurrentUser
}