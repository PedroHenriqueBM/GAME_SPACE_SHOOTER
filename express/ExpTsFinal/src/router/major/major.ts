import { Router } from 'express'
import * as majorController from '../../controllers/major';

const major = Router()

major.get('/major', majorController.index)
major.all('/major/create', majorController.create)
major.get('/major/read/:id', majorController.read)
major.all('/major/update/:id', majorController.update)
major.post('/major/remove/:id', majorController.remove)




export default major;