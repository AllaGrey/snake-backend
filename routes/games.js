const express = require('express');
const gamesRouter = express.Router();
const { gameCtrl } = require('../controllers');
const { authenticate } = require('../middlewares/auth');
const { gameValidation } = require('../middlewares/games');

gamesRouter.post('/', authenticate, gameCtrl.addGame);
gamesRouter.patch('/', authenticate, gameValidation, gameCtrl.updateGame);
gamesRouter.get('/current', authenticate, gameCtrl.getCurrentGame);
gamesRouter.get('/scores', authenticate, gameCtrl.getTotalScores);

module.exports = gamesRouter;