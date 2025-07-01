import { Router } from "express";
import * as mainController from '../../controllers/main'

const common = Router();

common.get("/", mainController.index);
    
common.get("/sobre", mainController.about);

common.use((req, res) => {
    res.statusCode = 404;
    res.send("404!");
})






export default common;