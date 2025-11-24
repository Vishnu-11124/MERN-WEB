import fs from 'fs'

for (let index = 0; index < 500; index++) {
    fs.writeFileSync('./bigfile.txt', `This is line number ${index}\n`, { flag: 'a' })
    
}