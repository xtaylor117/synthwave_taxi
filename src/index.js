console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  let startButton = document.getElementById("start-button");

  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(143, 130, 15, 15);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();

  startButton.addEventListener("click", () => { 
    document.getElementById("intro-container").classList.add("hidden");
  })
})