const start = document.querySelector(".start");
const stop = document.getElementsByClassName("stop");
const reset = document.getElementsByClassName("reset");
let countDisplay = document.getElementById("display");
let count = 0;
let counter = null;

addEventListener("click", (e) => {
  if (e.target.innerHTML === "start") {
    startCount(e);
    console.log(e);
  } else if (e.target.innerHTML === "stop") {
    stopCount();
  } else if (e.target.innerHTML === "reset") {
    resetCount();
  }
});

function startCount(e) {
  start.disabled = true;
  counter = setInterval(() => {
    count++;
    countDisplay.textContent = count;
  }, 1000);
}

function stopCount() {
  clearInterval(counter);
  start.disabled = false;
}

function resetCount() {
  count = 0;
  countDisplay.innerText = 0;
  clearInterval(counter);
  start.disabled = false;
}
