import fs from 'fs';
import path from 'path';



function readContentOfFile(url){
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(url), (err, data) => {

            if (data) {

                resolve(data.toString())
            } else {
                reject(err);
            }

        })
    })
}




export {
    readContentOfFile
}