import * as fs from "fs/promises";

// Creating Directory / Folder
/*
try {
    // await fs.mkdir("c:\\node") // creating single file
    // await fs.mkdir("c:\\node\\fs-module\\promise-api", { recursive: true }) // creating all files from scratch
    console.log('Folder created')
} catch (error) {
    console.log(error)
}

*/

// Read the content
/*
try {
    const files = await fs.readdir("c:\\Developer\\MERN-WEB")
    for (const file of files) {
        console.log(file)
    }
} catch (error) {
    console.log(error)
}
*/

// Remove Folder - The folder should be empty
/*
try {
    await fs.mkdir("c:\\node\\fs-module", { recursive: true }) // creating
    await fs.rmdir("c:\\node\\fs-module") 
    
} catch (error) {
    console.log(error)
}
*/

// Create and Write Files
/*
try {
     await fs.writeFile('File.txt', 'Hello World')
     console.log('File created')
} catch (error) {
    console.log(error)
}
*/

// Read File
/*
try {
   const data =  await fs.readFile('File.txt', 'utf-8')
   console.log(data)
} catch (error) {
    console.log(error)
}
*/

// Append File
/*
try {
 await fs.appendFile('File.txt', ' Node js is learning')
 const data =  await fs.readFile('File.txt', 'utf-8')
 console.log(data)
} catch (error) {
    console.log(error)
}
*/

// Copy File
/*
try {
    await fs.copyFile('File.txt', 'File2.txt')
    const data =  await fs.readFile('File2.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(error)
}
*/

// Get file information
try {
    const stats = await fs.stat('File.txt')
    console.log(stats)
    console.log(`Is file: ${stats.isFile()}`)
    console.log(`Is directory: ${stats.isDirectory()}`)
    console.log(`Size: ${stats.size} bytes`)
} catch (error) {
    console.log(error)
}