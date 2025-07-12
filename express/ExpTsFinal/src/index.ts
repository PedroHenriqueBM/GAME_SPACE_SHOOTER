import express from 'express';
import dotenv from 'dotenv';
import { validateEnv } from './utils/validateEnv';
import { engine } from 'express-handlebars';
import session from 'express-session';
import cookieParser from 'cookie-parser';

import { v4 as uuidv4 } from 'uuid';
import router from './router/router';

declare module 'express-session' {
    interface SessionData {
        uid: string;
    }
}

dotenv.config({ path: ".env" });
validateEnv();


const app = express()
const PORT = process.env.PORT || 3333


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({
    secret: process.env.SECRET_COOKIE!,
    resave: false,
    saveUninitialized: false,
    name: 'connect.sid'
}));

app.engine("handlebars", engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main'
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.use(router);

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}`);
});


