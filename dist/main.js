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
eval("console.log(\"Webpack is working!\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let startButton = document.getElementById(\"start-button\");\n\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n\n    ctx.beginPath();\n    ctx.rect(143, 130, 15, 15);\n    ctx.fillStyle = \"#FFFFFF\";\n    ctx.fill();\n    ctx.closePath();\n\n  startButton.addEventListener(\"click\", () => { \n    document.getElementById(\"intro-container\").classList.add(\"hidden\");\n  })\n})\n\n//# sourceURL=webpack://synthwave-taxi/./src/index.js?");
/******/ })()
;