

let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let restartBtn = document.querySelector('.restart');

let tween = gsap.to(".box1", {
    y:  - 200,
    duration: 4,
    backgroundColor: 'teal',
    repeat: -1
});


playBtn.addEventListener('click', () => {
    tween.play();
})

pauseBtn.addEventListener('click', () => {
    tween.pause();
})

restartBtn.addEventListener('click', () => {
    tween.restart();
})