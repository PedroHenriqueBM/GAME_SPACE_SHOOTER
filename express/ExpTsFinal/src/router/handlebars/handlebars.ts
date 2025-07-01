import { Router } from "express";
import * as mainController  from "../../controllers/main";


const handlebars = Router();

handlebars.get('/hb1', mainController.hb1);

handlebars.get('/hb2', mainController.hb2);

handlebars.get('/hb3', mainController.hb3);

handlebars.get('/hb4',mainController.hb4);

handlebars.get('/hb5',mainController.hb5);



export default handlebars;