
import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {



    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
        PATH_LOG: str(),
        DATABASE_URL: str(),
        SECRET_COOKIE: str()
    });

};

export { validateEnv };