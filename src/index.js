// console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  let startButton = document.getElementById("start-button");
  let otherCar1 = document.getElementById("other-car-1")
  let otherCar2 = document.getElementById("other-car-2")
  let otherCar3 = document.getElementById("other-car-3")
  let otherCar4 = document.getElementById("other-car-4")
  let otherCar5 = document.getElementById("other-car-5")

  let car = document.getElementById("car")

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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  startButton.addEventListener("click", () => { 
  
    if (!document.getElementById("restart-game").classList.contains('hidden')) {
      document.getElementById("restart-game").classList.toggle("hidden")
    }

    document.getElementById("intro-container").classList.add("hidden");

    // document.addEventListener("keyup", e => {

    // })
    
    document.addEventListener("keydown", e => {
      if(e.key == "Right" || e.key == "ArrowRight") {
        if(car.classList.contains("lane3")) {
          car.classList.remove("lane3")
          car.classList.add("lane4")
          moveRight();
        } else if (car.classList.contains("lane4")) {
          car.classList.remove("lane4")
          car.classList.add("lane5")
          moveRight();
        } else if (car.classList.contains("lane1")) {
          car.classList.remove("lane1")
          car.classList.add("lane2")
          moveRight();
        } else if (car.classList.contains("lane2")) {
          car.classList.remove("lane2")
          car.classList.add("lane3")
          moveRight();
        }
      }
      
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        if(car.classList.contains("lane3")) {
          car.classList.remove("lane3")
          car.classList.add("lane2")
          moveLeft();
        } else if (car.classList.contains("lane4")) {
          car.classList.remove("lane4")
          car.classList.add("lane3")
          moveLeft();
        } else if (car.classList.contains("lane2")) {
          car.classList.remove("lane2")
          car.classList.add("lane1")
          moveLeft();
        } else if (car.classList.contains("lane5")) {
          car.classList.remove("lane5")
          car.classList.add("lane4")
          moveLeft();
        }
      } else if (e.keyCode == 32) {
        jump();
      }
    });

    otherCar1.style.animation = `slide1 ${getRandomInt(2, 5)}s linear infinite`
    otherCar2.style.animation = `slide2 ${getRandomInt(2, 5)}s linear infinite`
    otherCar3.style.animation = `slide3 ${getRandomInt(2, 5)}s linear infinite`
    otherCar4.style.animation = `slide4 ${getRandomInt(2, 5)}s linear infinite`
    otherCar5.style.animation = `slide5 ${getRandomInt(2, 5)}s linear infinite`

    otherCar1.addEventListener('animatioiteration', () => {
      otherCar1.style.animation = `slide1 ${getRandomInt(2, 5)}s linear infinite`;
    })

    otherCar2.addEventListener('animatioiteration', () => {
      otherCar2.style.animation = `slide2 ${getRandomInt(2, 5)}s linear infinite`;
    })

    otherCar3.addEventListener('animatioiteration', () => {
      otherCar3.style.animation = `slide3 ${getRandomInt(2, 5)}s linear infinite`;
    })

    otherCar4.addEventListener('animatioiteration', () => {
      otherCar4.style.animation = `slide4 ${getRandomInt(2, 5)}s linear infinite`;
    })

    otherCar5.addEventListener('animatioiteration', () => {
      otherCar5.style.animation = `slide5 ${getRandomInt(2, 5)}s linear infinite`;
    })

    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"))
    let carBottom = parseInt(window.getComputedStyle(car).getPropertyValue("bottom"))

    let car1Left = parseInt(window.getComputedStyle(otherCar1).getPropertyValue("left"))
    let car2Left = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("left"))
    let car3Left = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("left"))
    let car4Left = parseInt(window.getComputedStyle(otherCar4).getPropertyValue("left"))
    let car5Left = parseInt(window.getComputedStyle(otherCar5).getPropertyValue("left"))

    let car1Bottom = parseInt(window.getComputedStyle(otherCar1).getPropertyValue("bottom"))
    let car2Bottom = parseInt(window.getComputedStyle(otherCar2).getPropertyValue("bottom"))
    let car3Bottom = parseInt(window.getComputedStyle(otherCar3).getPropertyValue("bottom"))
    let car4Bottom = parseInt(window.getComputedStyle(otherCar4).getPropertyValue("bottom"))
    let car5Bottom = parseInt(window.getComputedStyle(otherCar5).getPropertyValue("bottom"))

    setInterval(() => {
      if (
        (carLeft == car1Left && carBottom == car1Bottom) || 
        (carLeft == car2Left && carBottom == car2Bottom) ||
        (carLeft == car3Left && carBottom == car3Bottom) ||
        (carLeft == car4Left && carBottom == car4Bottom) ||
        (carLeft == car5Left && carBottom == car5Bottom)) {
          alert("You crashed! Game over.");
          car.style.animation = "none";
          otherCar1.style.animation = "none";
          otherCar2.style.animation = "none";
          otherCar3.style.animation = "none";
          otherCar4.style.animation = "none";
          otherCar5.style.animation = "none";
          document.getElementById("restart-game").classList.toggle("hidden")
      }
    }, 1);
  })
})