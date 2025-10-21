
// ------------------------------------
// createElement()
let header = document.createElement('h1')
header.innerText = 'Element Manipulation'
header.style.color = 'orange';


// appendChild()
document.body.appendChild(header)


// insertBefore(what, where)
const ul = document.querySelector('ul')
const firstLi = document.querySelector('li')

let newLi = document.createElement('li')
newLi.innerText = 'Numbers'
// ul.appendChild(newLi) 
ul.insertBefore(newLi, firstLi)

// append()
let section = document.querySelector('section')

const bold = document.createElement('b')
bold.innerText = " Let's begin the game"
bold.style.color = 'green'
section.append(bold)


// prepend()
const bold1 = document.createElement('b')
bold1.innerText = "Hey, there! "
bold1.style.color = 'Blue'
section.prepend(bold1)


/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const para = document.querySelector('p')
const italic = document.createElement('i')
italic.innerText = "hey"
italic.style.color = 'red'
para.insertAdjacentElement('beforebegin', italic)


// removeChild()
const newList = document.querySelector('.new-list')
const liChild = document.querySelector('#child')
newList.removeChild(liChild)

// remove()
newList.remove() 

// ------------------------------------