console.log("test");

var time = 0;

function increment() {
   // console.log(time);
   if (time >= 10000) {
      clearInterval(interval);
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

// can't do it here, counts too fast?
// setInterval(increment, 10);
