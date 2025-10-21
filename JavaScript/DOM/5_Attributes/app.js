
// href
const a = document.querySelector("a")
console.log(a.href)

// value
const input = document.querySelector('input')
console.log(input.value) // Currently input have no value

// type
console.log(`Type : ${input.type}`)

// input.value = 'hello'
console.log(input.value)

// getAttribute(attrName)
console.log(input.getAttribute('type'))

// setAttribute(attrName, value)
input.setAttribute("placeholder","Enter your name..")