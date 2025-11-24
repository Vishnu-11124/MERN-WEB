import * as fs from 'fs';

fs.mkdir('c:\\node\\api', (err) => {
    if (err) throw err;
    console.log('Directory created..');
});