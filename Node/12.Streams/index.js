import { createReadStream } from 'fs';

// const stream = createReadStream('./bigfile.txt',{
//     highWaterMark: 60000
// })

const stream = createReadStream('./bigfile.txt',{
    encoding: 'utf-8'
})

stream.on('data', (chunk) => {
  console.log(`Received ${chunk}`);
})