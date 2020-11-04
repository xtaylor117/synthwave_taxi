console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  let startButton = document.getElementById("start-button");
  let otherCar = document.getElementById("other-cars")
  let car = document.getElementById("car")

  // otherCar.addEventListener('animationiteration', () => {
  //   let random = Math.floor(Math.random() * 5)
  //   let left = random * 10;
  //   otherCar.style.left = 181 + left + "px"
  // })

  function jump() {
    car.classList.toggle("animate");
    setTimeout(function(){
      car.classList.toggle("animate")
    }, 500)
  }

  function moveLeft() {
    let left = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    left -= 90;
    if( left >= 100){
      car.style.left = left + "px";
    }
  }

  function moveRight() {
    let left = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    left += 90;
    if( left < 500){
      car.style.left = left + "px";
    }
  }

  startButton.addEventListener("click", () => { 
    document.getElementById("intro-container").classList.add("hidden");
    document.addEventListener("keydown", e => {
      if(e.key == "Right" || e.key == "ArrowRight") {
        moveRight();
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        moveLeft();
      } else if (e.keyCode == 32) {
        jump();
      }
    });
  })
})