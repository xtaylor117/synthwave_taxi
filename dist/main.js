/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("// console.log(\"Webpack is working!\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let startButton = document.getElementById(\"start-button\");\n  let restartButton = document.getElementById(\"restart-button\")\n\n  startButton.addEventListener(\"click\", () => { \n    startGame();\n  })\n\n  restartButton.addEventListener(\"click\", () => {\n    clearIntervalsAndListeners()\n    startGame()\n  })\n\n  let otherCar1 = document.getElementById(\"other-car-1\")\n  let otherCar2 = document.getElementById(\"other-car-2\")\n  let otherCar3 = document.getElementById(\"other-car-3\")\n  let otherCar4 = document.getElementById(\"other-car-4\")\n  let otherCar5 = document.getElementById(\"other-car-5\")\n  let song = document.getElementById(\"audio\")\n  let playPause = document.getElementById(\"play-pause\")\n  let mute = document.getElementById(\"mute\")\n\n  let car = document.getElementById(\"car\")\n\n  function jump() {\n    if (!car.classList.contains(\"animate\")) {\n      car.classList.add(\"animate\");\n    }\n    setTimeout(function(){\n      car.classList.remove(\"animate\")\n    }, 500)\n  }\n\n  function moveLeft() {\n    let left = parseInt(window.getComputedStyle(car).getPropertyValue(\"left\"));\n    left -= 90;\n    if( left >= 100){\n      car.style.left = left + \"px\";\n    }\n  }\n\n  function moveRight() {\n    let left = parseInt(window.getComputedStyle(car).getPropertyValue(\"left\"));\n    left += 90;\n    if( left < 500){\n      car.style.left = left + \"px\";\n    }\n  }\n\n  function getRandomInt(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  function keyRelease(e) {\n    if(e.key == \"Right\" || e.key == \"ArrowRight\") {\n      document.getElementById('D').classList.remove('pressed')\n    } else if(e.key == \"Left\" || e.key == \"ArrowLeft\") {\n      document.getElementById('A').classList.remove('pressed')\n    } else if (e.key === ' ' || e.key === 'Spacebar') {\n      document.getElementById('space').classList.remove('pressed')\n    }\n  }\n\n  function keyPress(e) {\n    if(e.key == \"Right\" || e.key == \"ArrowRight\") {\n      document.getElementById('D').classList.add('pressed')\n      if(car.classList.contains(\"lane3\")) {\n        car.classList.remove(\"lane3\")\n        car.classList.add(\"lane4\")\n        moveRight();\n      } else if (car.classList.contains(\"lane4\")) {\n        car.classList.remove(\"lane4\")\n        car.classList.add(\"lane5\")\n        moveRight();\n      } else if (car.classList.contains(\"lane1\")) {\n        car.classList.remove(\"lane1\")\n        car.classList.add(\"lane2\")\n        moveRight();\n      } else if (car.classList.contains(\"lane2\")) {\n        car.classList.remove(\"lane2\")\n        car.classList.add(\"lane3\")\n        moveRight();\n      }\n    } else if(e.key == \"Left\" || e.key == \"ArrowLeft\") {\n      document.getElementById('A').classList.add('pressed')\n      if(car.classList.contains(\"lane3\")) {\n        car.classList.remove(\"lane3\")\n        car.classList.add(\"lane2\")\n        moveLeft();\n      } else if (car.classList.contains(\"lane4\")) {\n        car.classList.remove(\"lane4\")\n        car.classList.add(\"lane3\")\n        moveLeft();\n      } else if (car.classList.contains(\"lane2\")) {\n        car.classList.remove(\"lane2\")\n        car.classList.add(\"lane1\")\n        moveLeft();\n      } else if (car.classList.contains(\"lane5\")) {\n        car.classList.remove(\"lane5\")\n        car.classList.add(\"lane4\")\n        moveLeft();\n      }\n    } else if (e.key === ' ' || e.key === 'Spacebar') {\n      if (e.target === mute) {\n        e.preventDefault();\n      } else if (e.target === playPause) {\n        e.preventDefault();\n      }\n      document.getElementById('space').classList.add('pressed')\n      jump();\n    }\n  }\n  \n  function playButton() {\n    if (playPause.classList.contains('pause')) {\n      playPause.classList.remove('pause')\n      playPause.classList.add('play')\n      playPause.innerHTML = '<i class=\"far fa-play-circle\"></i>'\n\n      song.pause();\n    } else {\n      playPause.classList.remove('play')\n      playPause.classList.add('pause')\n      playPause.innerHTML = '<i class=\"far fa-pause-circle\"></i>'\n      \n      song.play();\n    }\n  }\n\n  function muteButton() {\n    if (mute.classList.contains('muted')) {\n      mute.classList.remove('muted')\n      song.volume = 0.7;\n      mute.innerHTML = '<i class=\"fas fa-volume-up\"></i>'\n    } else {\n      mute.classList.add('muted')\n      song.volume = 0;\n      mute.innerHTML = '<i class=\"fas fa-volume-mute\"></i>'\n    }\n  }\n\n  function changeAnimationDuration(e) {\n\n  }\n  \n\n  function clearIntervalsAndListeners(){\n    clearInterval(this.scoreTimer)\n    clearInterval(this.collision)\n    document.removeEventListener(\"keyup\", keyRelease);\n    document.removeEventListener(\"keydown\", keyPress);\n    document.removeEventListener(\"click\", playButton);\n    document.removeEventListener(\"click\", muteButton);\n  }\n\n  function startGame() {\n    otherCar1.classList.add('slide1')\n    otherCar2.classList.add('slide2')\n    otherCar3.classList.add('slide3')\n    otherCar4.classList.add('slide4')\n    otherCar5.classList.add('slide5')\n\n    if (!mute.classList.contains('muted')) {\n      song.volume = 0.5;\n    }\n    \n    song.play();\n\n    playPause.addEventListener(\"click\", playButton)\n    mute.addEventListener(\"click\", muteButton)\n    \n\n    window.localStorage.setItem('counter', '0')\n    if (!document.getElementById(\"restart-game\").classList.contains('hidden')) {\n      document.getElementById(\"restart-game\").classList.toggle(\"hidden\")\n    }\n\n    document.getElementById(\"intro-container\").classList.add(\"hidden\");\n\n    document.addEventListener(\"keyup\", keyRelease);\n    document.addEventListener(\"keydown\", keyPress);\n\n    otherCar1.addEventListener('animationend', () => {\n      otherCar1.classList.remove('slide1')\n      otherCar1.style.animationDuration = `${getRandomInt(2, 5)}s`\n      void otherCar1.offsetWidth;\n      otherCar1.classList.add('slide1')\n    })\n\n    otherCar2.addEventListener('animationend', () => {\n      otherCar2.classList.remove('slide2')\n      otherCar2.style.animationDuration = `${getRandomInt(2, 5)}s`\n      void otherCar2.offsetWidth;\n      otherCar2.classList.add('slide2')\n    })\n    \n    otherCar3.addEventListener('animationend', () => {\n      console.log(otherCar3.style)\n      otherCar3.classList.remove('slide3')\n      otherCar3.style.animationDuration = `${getRandomInt(2, 5)}s`\n      void otherCar3.offsetWidth;\n      otherCar3.classList.add('slide3')\n    })\n    \n    otherCar4.addEventListener('animationend', () => {\n      console.log(otherCar4.style)\n      otherCar4.classList.remove('slide4')\n      otherCar4.style.animationDuration = `${getRandomInt(2, 5)}s`\n      void otherCar4.offsetWidth;\n      otherCar4.classList.add('slide4')\n    })\n\n    otherCar5.addEventListener('animationend', () => {\n      otherCar5.classList.remove('slide5')\n      otherCar5.style.animationDuration = `${getRandomInt(2, 5)}s`\n      void otherCar5.offsetWidth;\n      otherCar5.classList.add('slide5')\n    })\n\n    this.scoreTimer = setInterval(() => {\n      let next = parseInt(window.localStorage.counter) + 1\n      window.localStorage.setItem('counter', `${next}`)\n      document.getElementById('score').innerText = `${next * 100}`\n    }, 1000)\n\n\n    this.collision = setInterval(() => {\n      let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue(\"left\"))\n      let carBottom = parseInt(window.getComputedStyle(car).getPropertyValue(\"bottom\"))\n\n      let car1Left = parseInt(window.getComputedStyle(otherCar1).getPropertyValue(\"left\"))\n      let car2Left = parseInt(window.getComputedStyle(otherCar2).getPropertyValue(\"left\"))\n      let car3Left = parseInt(window.getComputedStyle(otherCar3).getPropertyValue(\"left\"))\n      let car4Left = parseInt(window.getComputedStyle(otherCar4).getPropertyValue(\"left\"))\n      let car5Left = parseInt(window.getComputedStyle(otherCar5).getPropertyValue(\"left\"))\n\n      let car1Bottom = parseInt(window.getComputedStyle(otherCar1).getPropertyValue(\"bottom\"))\n      let car2Bottom = parseInt(window.getComputedStyle(otherCar2).getPropertyValue(\"bottom\"))\n      let car3Bottom = parseInt(window.getComputedStyle(otherCar3).getPropertyValue(\"bottom\"))\n      let car4Bottom = parseInt(window.getComputedStyle(otherCar4).getPropertyValue(\"bottom\"))\n      let car5Bottom = parseInt(window.getComputedStyle(otherCar5).getPropertyValue(\"bottom\"))\n\n      if (\n        (carLeft == car1Left && carBottom == car1Bottom) || \n        (carLeft == car2Left && carBottom == car2Bottom) ||\n        (carLeft == car3Left && carBottom == car3Bottom) ||\n        (carLeft == car4Left && carBottom == car4Bottom) ||\n        (carLeft == car5Left && carBottom == car5Bottom)) {\n          song.pause();\n          clearInterval(scoreTimer);\n          otherCar1.style.animation = \"none\";\n          otherCar2.style.animation = \"none\";\n          otherCar3.style.animation = \"none\";\n          otherCar4.style.animation = \"none\";\n          otherCar5.style.animation = \"none\";\n          document.getElementById(\"your-score\").innerText = `${parseInt(window.localStorage.counter) * 100}`\n          window.localStorage.setItem('counter', '0')\n          document.getElementById(\"restart-game\").classList.toggle(\"hidden\")\n      }\n\n    }, 1);\n  }\n})\n\n//# sourceURL=webpack://synthwave-taxi/./src/index.js?");
/******/ })()
;