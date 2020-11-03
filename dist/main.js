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
eval("console.log(\"Webpack is working!\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let startButton = document.getElementById(\"start-button\");\n\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let x = canvas.width/2 - 7;\n  let y = canvas.height-17;\n\n  let rightPressed = false;\n  let leftPressed = false;\n\n  function drawCar() {\n    ctx.beginPath();\n    ctx.rect(x, y, 15, 15);\n    ctx.fillStyle = \"#FFFFFF\";\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  function draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawCar();\n    if(rightPressed) {\n      x += 7;\n      if (x + 15 > canvas.width) {\n        x = canvas.width - 15;\n      }\n    } else if(leftPressed) {\n      x -= 7;\n      if (x < 0) {\n        x = 0;\n      }\n    }\n  }\n\n  // function moveLeft() {\n  //   ctx.clearRect(0, 0, canvas.width, canvas.height);\n  //   drawCar();\n  //   x -= 2;\n  // }\n\n  // function moveRight() {\n  //   ctx.clearRect(0, 0, canvas.width, canvas.height);\n  //   drawCar();\n  //   x += 2;\n  // }\n\n  function keyDownHandler(e) {\n      if(e.key == \"Right\" || e.key == \"ArrowRight\") {\n          rightPressed = true;\n      }\n      else if(e.key == \"Left\" || e.key == \"ArrowLeft\") {\n          leftPressed = true;\n      }\n  }\n\n  function keyUpHandler(e) {\n      if(e.key == \"Right\" || e.key == \"ArrowRight\") {\n          rightPressed = false;\n      }\n      else if(e.key == \"Left\" || e.key == \"ArrowLeft\") {\n          leftPressed = false;\n      }\n  }\n\n  startButton.addEventListener(\"click\", () => { \n    document.getElementById(\"intro-container\").classList.add(\"hidden\");\n    document.addEventListener(\"keydown\", keyDownHandler, false);\n    document.addEventListener(\"keyup\", keyUpHandler, false);\n    setInterval(draw, 10);\n  })\n})\n\n//# sourceURL=webpack://synthwave-taxi/./src/index.js?");
/******/ })()
;