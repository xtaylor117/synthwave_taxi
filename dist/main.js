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
eval("console.log(\"Webpack is working!\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let startButton = document.getElementById(\"start-button\");\n  let otherCar = document.getElementById(\"other-cars\")\n  let car = document.getElementById(\"car\")\n\n  // otherCar.addEventListener('animationiteration', () => {\n  //   let random = Math.floor(Math.random() * 5)\n  //   let left = random * 10;\n  //   otherCar.style.left = 181 + left + \"px\"\n  // })\n\n  function jump() {\n    car.classList.toggle(\"animate\");\n    setTimeout(function(){\n      car.classList.toggle(\"animate\")\n    }, 500)\n  }\n\n  function moveLeft() {\n    let left = parseInt(window.getComputedStyle(car).getPropertyValue(\"left\"));\n    left -= 90;\n    if( left >= 100){\n      car.style.left = left + \"px\";\n    }\n  }\n\n  function moveRight() {\n    let left = parseInt(window.getComputedStyle(car).getPropertyValue(\"left\"));\n    left += 90;\n    if( left < 500){\n      car.style.left = left + \"px\";\n    }\n  }\n\n  startButton.addEventListener(\"click\", () => { \n    document.getElementById(\"intro-container\").classList.add(\"hidden\");\n    document.addEventListener(\"keydown\", e => {\n      if(e.key == \"Right\" || e.key == \"ArrowRight\") {\n        moveRight();\n      }\n      else if(e.key == \"Left\" || e.key == \"ArrowLeft\") {\n        moveLeft();\n      } else if (e.keyCode == 32) {\n        jump();\n      }\n    });\n  })\n})\n\n//# sourceURL=webpack://synthwave-taxi/./src/index.js?");
/******/ })()
;