// classlist - The classList property returns a DOMTokenList — basically, a list of all CSS classes assigned to an element. You can use it to add, remove, toggle, or check classes without touching the className string directly.

let header = document.querySelector('h1')
console.log(header.classList) // Get all class names


// add() 
let para = document.querySelector('p')
para.classList.add('textStyle')  // Add a new class
console.log(para.classList)


// remove() 
para.classList.remove('textStyle')  // Remove a class
console.log(para.classList)


// toggle() - Toggle a class (adds if not there, removes if already present)
para.classList.toggle('textStyle')  
console.log(para.classList)

// Check if a class exists
console.log(para.classList.contains("textStyle"));