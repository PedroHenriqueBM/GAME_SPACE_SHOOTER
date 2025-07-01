import { Response, Request, NextFunction } from 'express';
import fs from 'fs'

function logger(simple: Boolean, req: Request, res: Response) {

    const path_log = process.env.PATH_LOG || '';

    fs.readFile(path_log, (err, data) => {
        let oldData = data;
        let newData = simple ? `${new Date().toISOString()} ${req.url}  ${req.method}` : `${new Date().toISOString()} ${req.url}  ${req.method} ${req.httpVersion} ${req.get('User-Agent')}`
        fs.writeFile(path_log, oldData + "\n" + newData, 'utf8', (err) => { });
    })


}

export { logger };