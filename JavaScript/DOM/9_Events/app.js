// ----------- BAD WAY-----------
let secondBtn = document.querySelector('.second-btn');
secondBtn.onclick = () => {
    alert('It is also another bad way man!')
}


// ----------- GREAT WAY-----------
let bestBtn = document.querySelector('.best');
bestBtn.addEventListener('click', () => {
    alert('This is the best way to add event listener!');
    document.body.style.backgroundColor = 'lightblue';
})


// ----------- Event (e) Object -----------

let para = document.querySelector('.para')
para.addEventListener('mouseover', (e) => {
    console.log(e);
    e.target.style.backgroundColor = 'yellow';
});