// innerText - property is used to get or set the visible text content of an HTML element.
const para = document.querySelector('p')
console.log(para.innerText) 

let header = document.querySelector('h1')
console.log(header.innerText) // Hello World

// Changing content
header.innerHTML = "DOM Manipulation!"
console.log(header.innerText) // DOM Manipulation!

// textContent - property is used to get or set the text inside an element, including the text of all its child elements.
console.log(para.textContent)

// innerHTML - property allows you to get or set the HTML content inside an element. Unlike innerText or textContent, it doesn’t just handle text — it can include HTML tags too.
console.log(para.innerHTML)

header.innerHTML = `<i>Web DOM!</i>`

