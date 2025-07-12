import { Router } from 'express';
import lorem from './lorem/lorem';
import handlebars from './handlebars/handlebars';
import staticFiles from './staticFiles/staticFiles';
import middlewares from './middlewares/middlewares';
import common from './common/common';
import major from './major/major';
import user from './user/user';
import game from './game/game';
const router = Router();




router.use(middlewares);
router.use("/lorem", lorem)
router.use("/",
    handlebars,
    staticFiles,
    user,
    major,
    game,
    common
);




export default router;
