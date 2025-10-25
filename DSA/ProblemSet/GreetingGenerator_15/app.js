    const form = document.getElementById('form');
    const result = document.getElementById('result');

    let greeting = (time) => {
        if (isNaN(time) || time < 0 || time > 23) {
            result.innerText = 'Enter a valid time';
            result.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a6f)";
            result.style.color = "white";
            return;
        }

        switch (true) {
            case (time >= 0 && time < 12):
                result.innerText = 'Good Morning';
                result.style.background = "linear-gradient(135deg, #ffd43b, #fab005)";
                result.style.color = "#333";
                break;
            case (time >= 12 && time < 17):
                result.innerText = 'Good Afternoon';
                result.style.background = "linear-gradient(135deg, #ffa94d, #fd7e14)";
                result.style.color = "white";
                break;
            case (time >= 17 && time < 21):
                result.innerText = 'Good Evening';
                result.style.background = "linear-gradient(135deg, #9775fa, #845ef7)";
                result.style.color = "white";
                break;
            case (time >= 21 && time <= 23):
                result.innerText = 'Good Night';
                result.style.background = "linear-gradient(135deg, #4c6ef5, #364fc7)";
                result.style.color = "white";
                break;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const time = parseInt(document.querySelector('#time').value);
        console.log(time)
        greeting(time);    
    });
