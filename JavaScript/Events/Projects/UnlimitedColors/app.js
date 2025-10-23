
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let intervalId = null; // store interval reference

// Random color generator
let colorPicker = () => {
  const colorValue = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += colorValue[random];
  }
  return color;
};

// Start changing background
startBtn.addEventListener('click', () => {
  if (!intervalId) { // prevent multiple intervals
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = colorPicker();
    }, 1000);
  }
});

// Stop changing background
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null; // reset interval reference
});
