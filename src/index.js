// console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  let startButton = document.getElementById("start-button");
  let restartButton = document.getElementById("restart-button")

  startButton.addEventListener("click", () => { 
    startGame();
  })

  restartButton.addEventListener("click", () => {
    clearIntervalsAndListeners()
    startGame()
  })

  let otherCar1 = document.getElementById("other-car-1")
  let otherCar2 = document.getElementById("other-car-2")
  let otherCar3 = document.getElementById("other-car-3")
  let otherCar4 = document.getElementById("other-car-4")
  let otherCar5 = document.getElementById("other-car-5")
  let song = document.getElementById("audio")
  let playPause = document.getElementById("play-pause")
  let mute = document.getElementById("mute")

  let car = document.getElementById("car")

  function jump() {
    if (!car.classList.contains("animate")) {
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

  function keyRelease(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
      document.getElementById('D').classList.remove('pressed')
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
      document.getElementById('A').classList.remove('pressed')
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      document.getElementById('space').classList.remove('pressed')
    }
  }

  function keyPress(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
      document.getElementById('D').classList.add('pressed')
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
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
      document.getElementById('A').classList.add('pressed')
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
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      console.log(e)
      document.getElementById('space').classList.add('pressed')
      jump();
    }
  }
  
  function playButton() {
    if (playPause.classList.contains('pause')) {
      playPause.classList.remove('pause')
      playPause.classList.add('play')
      playPause.innerHTML = '<i class="far fa-play-circle"></i>'
      song.pause();
    } else {
      playPause.classList.remove('play')
      playPause.classList.add('pause')
      playPause.innerHTML = '<i class="far fa-pause-circle"></i>'
      song.play();
    }
  }

  function muteButton() {
    if (mute.classList.contains('muted')) {
      mute.classList.remove('muted')
      song.volume = 0.7;
      mute.innerHTML = '<i class="fas fa-volume-up"></i>'
    } else {
      mute.classList.add('muted')
      song.volume = 0;
      mute.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }
  }
  

  function clearIntervalsAndListeners(){
    clearInterval(this.scoreTimer)
    clearInterval(this.collision)
    document.removeEventListener("keyup", keyRelease);
    document.removeEventListener("keydown", keyPress);
    document.removeEventListener("click", playButton);
    document.removeEventListener("click", muteButton);
  }

  function startGame() {
    if (!mute.classList.contains('muted')) {
      song.volume = 0.5;
    }
    song.play();

    playPause.addEventListener("click", playButton)
    mute.addEventListener("click", muteButton)
    

    window.localStorage.setItem('counter', '0')
    if (!document.getElementById("restart-game").classList.contains('hidden')) {
      document.getElementById("restart-game").classList.toggle("hidden")
    }

    document.getElementById("intro-container").classList.add("hidden");

    document.addEventListener("keyup", keyRelease);
    document.addEventListener("keydown", keyPress);
    
    otherCar1.style.animation = `slide1 ${getRandomInt(2, 5)}s linear infinite`
    otherCar2.style.animation = `slide2 ${getRandomInt(2, 5)}s linear infinite`
    otherCar3.style.animation = `slide3 ${getRandomInt(2, 5)}s linear infinite`
    otherCar4.style.animation = `slide4 ${getRandomInt(2, 5)}s linear infinite`
    otherCar5.style.animation = `slide5 ${getRandomInt(2, 5)}s linear infinite`

    // otherCar1.addEventListener('animationiteration', () => {
    //   otherCar1.style.animation = `slide1 ${getRandomInt(2, 5)}s linear infinite`;
    // })

    // otherCar2.addEventListener('animationiteration', () => {
    //   otherCar2.style.animation = `slide2 ${getRandomInt(2, 5)}s linear infinite`;
    // })

    // otherCar3.addEventListener('animationiteration', () => {
    //   otherCar3.style.animation = `slide3 ${getRandomInt(2, 5)}s linear infinite`;
    // })

    // otherCar4.addEventListener('animationiteration', () => {
    //   otherCar4.style.animation = `slide4 ${getRandomInt(2, 5)}s linear infinite`;
    // })

    // otherCar5.addEventListener('animationiteration', () => {
    //   otherCar5.style.animation = `slide5 ${getRandomInt(2, 5)}s linear infinite`;
    // })
    

    this.scoreTimer = setInterval(() => {
      let next = parseInt(window.localStorage.counter) + 1
      window.localStorage.setItem('counter', `${next}`)
      document.getElementById('score').innerText = `${next * 100}`
    }, 1000)


    this.collision = setInterval(() => {
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

      if (
        (carLeft == car1Left && carBottom == car1Bottom) || 
        (carLeft == car2Left && carBottom == car2Bottom) ||
        (carLeft == car3Left && carBottom == car3Bottom) ||
        (carLeft == car4Left && carBottom == car4Bottom) ||
        (carLeft == car5Left && carBottom == car5Bottom)) {
          song.pause();
          clearInterval(scoreTimer);
          otherCar1.style.animation = "none";
          otherCar2.style.animation = "none";
          otherCar3.style.animation = "none";
          otherCar4.style.animation = "none";
          otherCar5.style.animation = "none";
          document.getElementById("your-score").innerText = `${parseInt(window.localStorage.counter) * 100}`
          window.localStorage.setItem('counter', '0')
          document.getElementById("restart-game").classList.toggle("hidden")
      }
    }, 1);
  }
})