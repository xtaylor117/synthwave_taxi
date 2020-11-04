  // let canvas = document.getElementById("game-canvas");
  // let ctx = canvas.getContext("2d");
  // let x = canvas.width/2 - 7;
  // let y = canvas.height-17;

  // let rightPressed = false;
  // let leftPressed = false;

  // function drawCar() {
  //   ctx.beginPath();
  //   ctx.rect(x, y, 15, 15);
  //   ctx.fillStyle = "#FFFFFF";
  //   ctx.fill();
  //   ctx.closePath();
  // }

  // function draw() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   drawCar();
  //   if(rightPressed) {
  //     x += 7;
  //     if (x + 15 > canvas.width - 70) {
  //       x = canvas.width - 70;
  //     }
  //   } else if(leftPressed) {
  //     x -= 7;
  //     if (x < 55) {
  //       x = 55;
  //     }
  //   }
  // }

  // function keyDownHandler(e) {
  //     if(e.key == "Right" || e.key == "ArrowRight") {
  //         rightPressed = true;
  //     }
  //     else if(e.key == "Left" || e.key == "ArrowLeft") {
  //         leftPressed = true;
  //     }
  // }

  // function keyUpHandler(e) {
  //     if(e.key == "Right" || e.key == "ArrowRight") {
  //         rightPressed = false;
  //     }
  //     else if(e.key == "Left" || e.key == "ArrowLeft") {
  //         leftPressed = false;
  //     }
  // }


    // document.addEventListener("keydown", keyDownHandler, false);
    // document.addEventListener("keyup", keyUpHandler, false);
    // setInterval(draw, 10);