import { Request, Response } from 'express'
import * as majorService from '../services/major.service'
import { errorMessage } from '../utils/errorMessage';
import Joi from 'joi';


let schemaBody = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    code: Joi.string().min(1).max(4).required(),
    description: Joi.string().min(0).optional()
})

let schemaParamns = Joi.object({
    id: Joi.string().min(1).max(40)
})

const index = async (req: Request, res: Response) => {
    try {
        let majors = await majorService.getAllMajors();
        res.render('major/index', { majors });
    } catch (err) {
        res.render("major/index", {
            falha: errorMessage("Falha ao ler cursos", String(err), 500, true)
        })
    }

}

const create = async (req: Request, res: Response) => {


    if (req.method === 'GET') {
        res.render('major/create')
    } else {
        try {

            let result = schemaBody.validate(req.body);
            if (result.error) {
                throw result.error;
            }

            await majorService.createMajor(req.body)
            res.redirect('/major')
        } catch (err) {

            res.render("major/create", {
                falha: errorMessage("Falha ao criar curso", String(err), 500, false)
            })


        }
    }

}

const read = async (req: Request, res: Response) => {


    try {

        const id = req.params.id;

        let result = schemaParamns.validate(req.params);
        if (result.error) {
            throw result.error;
        }

        const major = await majorService.getMajor(id)
        res.render("major/read", { major })
    } catch (err) {
        res.render("major/read", {
            falha: errorMessage("Falha ao ler curso", String(err), 500, false)
        })

    }


}

const update = async (req: Request, res: Response) => {

    if (req.method === 'GET') {

        try {
            let major = await majorService.getMajor(req.params.id)
            res.render('major/update', { major })
        } catch (err) {
            res.render("major/update", {
                falha: errorMessage("Falha ao atualizar curso", String(err), 500, false)
            })
        }

    } else {
        try {

            let result = schemaBody.validate(req.body);
            if (result.error) {
                throw result.error;
            }

            let resultParamns = schemaParamns.validate(req.params);
            if (resultParamns.error) {
                throw resultParamns.error;
            }


            await majorService.updateMajor(req.params.id, req.body)
            res.redirect('/major')
        } catch (err) {
            res.render("major/update", {
                falha: errorMessage("Falha ao atualizar curso", String(err), 500, false)
            })
        }
    }

}

const remove = async (req: Request, res: Response) => {

    try {
        const id = req.params.id;
        let resultParamns = schemaParamns.validate(req.params);
        if (resultParamns.error) {
            throw resultParamns.error;
        }

        await majorService.removeMajor(id);
        res.redirect('/major');
    } catch (err) {
        res.status(500).send(err);
    }
}

export { index, read, create, update, remove }