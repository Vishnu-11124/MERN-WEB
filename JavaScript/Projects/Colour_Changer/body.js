

const title = document.querySelector(".title");

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

const reset = document.querySelector(".rst");

// add event listeners to the buttons
button1.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
    title.style.color = "white";
});

button2.addEventListener("click", () => {
    title.style.fontSize = "50px";
})

reset.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    title.style.color = "black";
    title.style.fontSize = "30px";
});
