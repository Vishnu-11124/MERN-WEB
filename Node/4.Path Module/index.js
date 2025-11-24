import path from 'path'

console.log(path.basename("c:\\node\\index.js"))
console.log(path.basename("c:\\node\\index.js", ".js"))

console.log(path.dirname("c:\\node\\index.js"))

console.log(path.extname("c:\\node\\index.js")) 

console.log(path.join('c:','node','react'))

// Go up a level
console.log(path.join('c:','node','react','..'))


console.log(path.normalize('c:\\mern\\course\\node\\index.js'))


console.log(path.parse('c:\\mern\\course\\node\\index.js'))
console.log(path.parse('c:\\mern\\course\\node\\index.js').base)
