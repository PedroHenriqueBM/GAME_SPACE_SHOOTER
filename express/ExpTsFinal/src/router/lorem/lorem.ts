import { Router } from 'express';
import * as mainController from '../../controllers/main'

const lorem = Router();

lorem.get("/:quantity",mainController.lorem)


export default lorem;