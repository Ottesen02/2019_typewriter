"use strict";

window.addEventListener("DOMContentLoaded", start);
function start() {
  let text = document.querySelector("#typewriter").textContent.trim();
  console.log(text);
  const button = document.querySelector("#button");
  const textSplit = text.split("");
  let time;
  let letterCount = 0;

  document.querySelector("#typewriter").textContent = text.substring(0, 0);

  button.classList.remove("hide");
  button.addEventListener("click", startWriting);

  function startWriting() {
    button.classList.add("hide");
    document.querySelector("#typewriter").textContent = text.charAt(
      letterCount
    );

    time = setTimeout(typeMore, Math.floor(Math.random() * 200 + 50));
  }

  function typeMore() {
    let timeOut = Math.floor(Math.random() * 500 + 100);
    letterCount++;
    console.log(timeOut);

    document.querySelector("#typewriter").textContent += text.charAt(
      letterCount
    );

    if (letterCount == 44) {
      console.log("sidste bogstav");
      start();
      clearTimeout(time);
      return;
    }

    time = setTimeout(typeMore, Math.floor(Math.random() * 200 + 50));
  }
}
