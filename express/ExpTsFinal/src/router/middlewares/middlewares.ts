import { Router, Request, Response, NextFunction } from "express";
import morgan from 'morgan';
import { authRequired, logger } from "../../utils/middlewares";

const middlewares = Router();

middlewares.use(morgan('short'))

middlewares.use((req: Request, res: Response, next: NextFunction) => {
    authRequired(req, res, next)
})

middlewares.use((req: Request, res: Response, next: NextFunction) => {
    logger(false, req, res, next)
})




export default middlewares;