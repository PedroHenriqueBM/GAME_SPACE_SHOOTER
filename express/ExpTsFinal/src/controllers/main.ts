import { NextFunction, Request, Response } from 'express';
import { loremIpsum } from 'lorem-ipsum';

const index = (req: Request, res: Response) => {
    res.redirect("major")
};

const about = (req: Request, res: Response) => {
    res.redirect("major")
}


const hb1 = (req: Request, res: Response) => {
    res.render('hb1', {
        mensagem: 'Universidade Federal do Amazonas',

    });
}

const hb2 = (req: Request, res: Response) => {
    res.render('hb2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
    });
}

const hb3 = (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('hb3', { profes });
}

const hb4 = (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];
    res.render('hb4', { profes });
}

const hb5 = (req: Request, res: Response) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('hb5', { technologies });
}

const lorem = (req: Request, res: Response, next: NextFunction) => {

    let quantity = parseInt(req.params.quantity);

    res.send(loremIpsum({ count: quantity, suffix: "\n", units: "paragraph", format: "html" }))

}

export {
    index,
    hb1,
    hb2,
    hb3,
    hb4,
    hb5,
    lorem,
    about
};