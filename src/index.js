console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  let startButton = document.getElementById("start-button");
  let otherCar1 = document.getElementById("other-car-1")
  let otherCar2 = document.getElementById("other-car-2")
  let otherCar3 = document.getElementById("other-car-3")
  let otherCar4 = document.getElementById("other-car-4")
  let otherCar5 = document.getElementById("other-car-5")

  let car = document.getElementById("car")

  // otherCar.addEventListener('animationiteration', () => {
  //   let random = Math.floor(Math.random() * 5)
  //   let left = random * 10;
  //   otherCar.style.left = 181 + left + "px"
  // })

  function jump() {
    if (car.classList != "animate") {
      car.classList.add("animate");
    }
    setTimeout(function(){
      car.classList.remove("animate")
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

    // otherCar1.addEventListener('animationiteration', () => {
    //   let random = Math.floor(Math.random() * 4)
    //   if (random === 0) {
    //     random = 1;
    //   }
    //   otherCar1.style.animation = `slide1 ${random}s infinite`;
    // })

    // otherCar2.addEventListener('animationiteration', () => {
    //   let random = Math.floor(Math.random() * 4)
    //   if (random === 0) {
    //     random = 1;
    //   }
    //   otherCar2.style.animation = `slide2 ${random}s infinite`;
    // })

    // otherCar3.addEventListener('animationiteration', () => {
    //   let random = Math.floor(Math.random() * 4)
    //   if (random === 0) {
    //     random = 1;
    //   }
    //   otherCar3.style.animation = `slide3 ${random}s infinite`;
    // })

    // otherCar4.addEventListener('animationiteration', () => {
    //   let random = Math.floor(Math.random() * 4)
    //   if (random === 0) {
    //     random = 1;
    //   }
    //   otherCar4.style.animation = `slide4 ${random}s infinite`;
    // })

    // otherCar5.addEventListener('animationiteration', () => {
    //   let random = Math.floor(Math.random() * 4)
    //   if (random === 0) {
    //     random = 1;
    //   }
    //   otherCar5.style.animation = `slide5 ${random}s infinite`;
    // })

    setInterval(() => {
      // let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"))
      let carBottom = parseInt(window.getComputedStyle(car).getPropertyValue("bottom"))

      // let car1Left = parseInt(window.getComputedStyle(otherCar1).getPropertyValue("left"))
      // let car2Left = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("left"))
      // let car3Left = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("left"))
      // let car4Left = parseInt(window.getComputedStyle(otherCar4).getPropertyValue("left"))
      // let car5Left = parseInt(window.getComputedStyle(otherCar5).getPropertyValue("left"))

      let car1Bottom = parseInt(window.getComputedStyle(otherCar1).getPropertyValue("bottom"))
      let car2Bottom = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("bottom"))
      let car3Bottom = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("bottom"))
      let car4Bottom = parseInt(window.getComputedStyle(otherCar4).getPropertyValue("bottom"))
      let car5Bottom = parseInt(window.getComputedStyle(otherCar5).getPropertyValue("bottom"))

      if (
        (carBottom === car1Bottom) || 
        (carBottom === car2Bottom) ||
        (carBottom === car3Bottom) ||
        (carBottom === car4Bottom) ||
        (carBottom === car5Bottom)) {
          alert("You crashed! Game over.");
          car.style.animation = "none";
          otherCar1.style.animation = "none";
          otherCar2.style.animation = "none";
          otherCar3.style.animation = "none";
          otherCar4.style.animation = "none";
          otherCar5.style.animation = "none";
      }
    }, 1);
  })
})