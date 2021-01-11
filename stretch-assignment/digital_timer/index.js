console.log("test");

var time = 0;
var interval;

function increment() {
   // console.log(time);
   if (time >= 10000) {
      document.get;
      return;
   }
   time += 10;
   document.querySelector("#secondTens").textContent = Math.floor(time / 10000);
   document.querySelector("#secondOnes").textContent =
      Math.floor(time / 1000) % 10;
   document.querySelector("#msHundreds").textContent =
      Math.floor(time / 100) % 10;
   document.querySelector("#msTens").textContent = Math.floor(time / 10) % 10;
   if (time >= 10000) {
      time = 10000;
      document
         .querySelectorAll(".digit")
         .forEach((i) => i.classList.add("redDigit"));
   }
}

function reset() {
   document
      .querySelectorAll(".digit")
      .forEach((i) => i.classList.remove("redDigit"));
   clearInterval(interval);
   document.querySelector("#secondTens").textContent = 0;
   document.querySelector("#secondOnes").textContent = 0;
   document.querySelector("#msHundreds").textContent = 0;
   document.querySelector("#msTens").textContent = 0;
   time = 0;
   interval = null;
}

function start() {
   // prevents multiple clicks accelerating time.
   if (interval != null) {
      return;
   }
   interval = setInterval(increment, 10);
}
