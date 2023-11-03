const addNewGame = require('./addNewGame');
const updateCurrentGame = require('./updateCurrentGame');
const gameDataValidation = require('./gameDataValidation');
const getLastGame = require('./getLastGame');
const getScores = require('./getScores');
const getUserMaxScore = require('./getUserMaxScore')

module.exports = {
    addNewGame,
    updateCurrentGame,
    gameDataValidation,
    getLastGame,
    getScores,
    getUserMaxScore
}