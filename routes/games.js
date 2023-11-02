const express = require('express');
const gamesRouter = express.Router();
const { gameCtrl } = require('../controllers');
const { authenticate } = require('../middlewares/auth');

gamesRouter.post('/game', authenticate, gameCtrl.addGame);
gamesRouter.patch('/game/:id', authenticate, gameCtrl.updateGame);
gamesRouter.get('/game', authenticate, gameCtrl.getCurrentGame);
gamesRouter.get('/scores', authenticate, gameCtrl.getTotalScores);

module.exports = gamesRouter;