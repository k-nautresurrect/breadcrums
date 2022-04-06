const start = document.getElementsByClassName("start");
const stop = document.getElementsByClassName("stop");
const reset = document.getElementsByClassName("reset");
let countDisplay = document.getElementById("display");
let count = 0;
let counter = null;

addEventListener("click", (e) => {
  if (e.target.innerHTML === "start") {
    startCount();
    console.log("started");
  } else if (e.target.innerHTML === "stop") {
    stopCount();
  } else if (e.target.innerHTML === "reset") {
    resetCount();
  }
});

function startCount() {
  counter = setInterval(() => {
    count++;
    countDisplay.innerText = count;
  }, 1000);
}

function stopCount() {
  clearInterval(counter);
}

function resetCount() {
  count = 0;
  countDisplay.innerText = 0;
  clearInterval(counter);
}
