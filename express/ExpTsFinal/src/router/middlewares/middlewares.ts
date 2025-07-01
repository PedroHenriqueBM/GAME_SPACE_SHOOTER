import { Router, Request, Response, NextFunction } from "express";
import morgan from 'morgan';
import { logger } from "../../utils/middlewares";

const middlewares = Router();

middlewares.use(morgan('short'))

middlewares.use((req: Request, res: Response, next: NextFunction) => {
    logger(false, req, res)
    next();
})




export default middlewares;