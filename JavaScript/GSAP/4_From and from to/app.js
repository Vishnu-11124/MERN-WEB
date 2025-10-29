// from and fromTo method

// from - You don't need to specify the current state, GSAP will figure it out for you.

// fromTo - You need to specify both the starting and ending states.


gsap.from(".box1", {
    y: -200,
    duration: 3,
    repeat: -1,
    ease: "linear",
})


gsap.fromTo(".box2", {
 y: 150,
 opacity:0
},{
 y: -150,
 opacity: 1,
 duration: 3,
 ease:"linear",
 repeat: -1,
})