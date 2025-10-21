// My technique
/*
let grey = document.querySelector('#grey')
let white = document.querySelector('white')
let blue = document.querySelector('blue')
let yellow = document.querySelector('yellow')

let bgChange = (color) =>{
    document.body.style.backgroundColor = color;
}
*/

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let color = e.target.id
        body.style.backgroundColor = color;
    })
})
