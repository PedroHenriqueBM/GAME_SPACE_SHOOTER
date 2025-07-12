import { Request, Response } from 'express'
import * as userService from '../services/user.service'
import * as majorService from '../services/major.service';
import { errorMessage } from '../utils/errorMessage';
import Joi = require('joi');
import { modalDelete } from '../utils/modalDelete';

let schemaBody = Joi.object({
    fullname: Joi.string().min(1).max(100),
    email: Joi.string().min(1).max(100),
    majorId: Joi.string().min(1).max(40),
    password: Joi.string().min(1).max(60),
    repeatPassword: Joi.string().min(1).max(60),
})

let schemaParamns = Joi.object({
    id: Joi.string().min(1).max(40)
})

let schemaLogin = Joi.object({
    email: Joi.string().min(1).max(100),
    password: Joi.string().min(1).max(60)
})


const index = async (req: Request, res: Response) => {
    try {
        let users = await userService.getAllUsers();
        res.render('user/index', { users, delete: modalDelete() });
    } catch (err) {

        res.render("user/index", {
            falha: errorMessage("Falha ao ler usuários", String(err), 500, true),
            delete: modalDelete()
        })

    }

}

const create = async (req: Request, res: Response) => {

    if (req.method === 'GET') {
        const majors = await majorService.getAllMajors();
        res.render('user/create', { majors });
    } else {
        try {
            let result = schemaBody.validate(req.body);
            if (result.error) {
                throw result.error;
            }

            if (req.body.password !== req.body.repeatPassword) {
                throw new Error("Senhas não são iguais");
            }
            delete req.body.repeatPassword;
            await userService.createUser(req.body)
            res.redirect('/user')
        } catch (err) {
            res.render("user/create", {
                falha: errorMessage("Falha ao criar usuário", String(err), 500, false)
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
        const user = await userService.getUser(id)
        const majors = await majorService.getAllMajors();
        res.render("user/read", { user, majors })
    } catch (err) {
        res.render("user/read", {
            falha: errorMessage("Falha ao ler user", String(err), 500, false)
        })
    }


}

const update = async (req: Request, res: Response) => {

    if (req.method === 'GET') {
        const user = await userService.getUser(req.params.id)
        const majors = await majorService.getAllMajors();
        res.render('user/update', { user, majors })
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
            if (req.body.password !== req.body.repeatPassword) {
                throw new Error("Senhas não são iguais");
            }

            await userService.updateUser(req.params.id, req.body)
            delete req.body.repeatPassword;
            res.redirect('/user')
        } catch (err) {
            res.render("user/update", {
                falha: errorMessage("Falha ao atualizar user", String(err), 500, false)
            })
        }
    }

}

const remove = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        let resultParamns = schemaParamns.validate(req.params);
        if (resultParamns.error) {
            throw resultParamns.error;
        }
        await userService.removeUser(id);
        res.redirect('/user');
    } catch (err) {
        res.status(500).send(err);
    }
}

const logout = async (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.send('Erro ao sair.');
        }
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
}

const login = async (req: Request, res: Response) => {

    if (req.method === 'GET') {
        res.render('login/login');
    } else {
        try {
            let result = schemaLogin.validate(req.body);
            if (result.error) {
                throw result.error;
            }
            let user = await userService.checkAuth(req.body)

            if (!user) {
                req.session.destroy(() => { });
                throw new Error("Falha ao autenticar");
            } else {
                req.session.uid = user.id;
            }
            res.redirect('/game')
        } catch (err) {
            res.render("login/login", {
                falha: errorMessage("Falha ao logar com usuário", String(err), 500, false)
            })
        }
    }

}


export { index, read, create, update, remove, logout, login }