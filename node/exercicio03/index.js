import http from 'http'
import {configDotenv} from 'dotenv'
import {readContentOfFile } from './util.js';

configDotenv({path:`.env.${process.env.NODE_ENV}`})


const server = http.createServer(async function(req,res){

res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
let file = await readContentOfFile("./index.html");

res.write(file);

res.end();

});


server.listen(process.env.APP_PORT || 4545,()=>{
    console.log("Servidor rodando na porta:",process.env.APP_PORT || 4545)
});