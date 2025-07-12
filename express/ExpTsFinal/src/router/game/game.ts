import { Router } from 'express';
import * as gameController from '../../controllers/game'

const game = Router();



game.get('/game', gameController.index)




export default game;