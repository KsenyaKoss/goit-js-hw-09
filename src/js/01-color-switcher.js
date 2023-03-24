function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
stopBtn.disabled = true;

function changingColor(){
    document.body.style.backgroundColor = getRandomHexColor();
  }

function stopChangingColor() {
    clearInterval(timerId); 
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = false
  return timerId = setInterval(changingColor, 1000)
});

stopBtn.addEventListener('click', stopChangingColor);