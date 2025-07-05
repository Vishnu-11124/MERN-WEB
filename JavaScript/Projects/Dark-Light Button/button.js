
let mode = "light";

const modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", () => {
    if (mode === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        modeBtn.innerHTML = '<a href="#">Light Mode</a>';
        mode = "dark";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modeBtn.innerHTML = '<a href="#">Dark Mode</a>';
        mode = "light";
    }
});