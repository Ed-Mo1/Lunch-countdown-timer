const daysText = document.querySelector("#day");
const hoursText = document.querySelector("#hour");
const minuText = document.querySelector("#minutes");
const secText = document.querySelector("#sec");

let futureDate = new Date("2023 12 30").getTime();

let interval = setInterval(timeDiff, 1000);

function timeDiff() {
  let currentDate = new Date().getTime();

  let diff = futureDate - currentDate;

  let daysTime = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hoursTime = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minTime = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let secTime = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff > 0) {
    daysText.textContent = daysTime < 10 ? `0${daysTime}` : daysTime;
    hoursText.textContent = hoursTime < 10 ? `0${hoursTime}` : hoursTime;
    minuText.textContent = minTime < 10 ? `0${minTime}` : minTime;
    secText.textContent = secTime < 10 ? `0${secTime}` : secTime;
  } else {
    clearInterval(interval);
    daysText.textContent = "EX";
    hoursText.textContent = "Pi";
    minuText.textContent = "R";
    secText.textContent = "ED";
  }
}

timeDiff();
