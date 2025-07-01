import express from 'express';
import dotenv from 'dotenv';
import { validateEnv } from './utils/validateEnv';
import { engine } from 'express-handlebars';
import router from './router/router';

dotenv.config({ path: ".env" });
validateEnv();


const app = express()
const PORT = process.env.PORT || 3333

app.use(express.urlencoded({ extended: false }));

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