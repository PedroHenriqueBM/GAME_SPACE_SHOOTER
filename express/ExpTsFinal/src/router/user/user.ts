import { Router } from 'express';
import * as userController from '../../controllers/user'

const user = Router();



user.get('/user', userController.index)
user.all('/user/create', userController.create)
user.get('/user/read/:id', userController.read)
user.all('/user/update/:id', userController.update)
user.post('/user/remove/:id', userController.remove)




export default user;