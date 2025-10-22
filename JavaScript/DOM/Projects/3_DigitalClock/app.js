
let clock = document.querySelector('#clock');

setInterval(() => {
    let time = new Date().toLocaleTimeString()
    clock.innerHTML = time;
},1000);