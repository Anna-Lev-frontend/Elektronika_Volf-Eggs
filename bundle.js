/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    //создаем размер экрана
    this.screen = new Screen(600, 400);
  }
  _createClass(Game, [{
    key: "frame",
    value: function frame(time) {
      var _this = this;
      requestAnimationFrame(function (time) {
        return _this.frame(time());
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;
      requestAnimationFrame(function (time) {
        return _this2.frame(time());
      });
    }
  }]);
  return Game;
}();

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => (/* binding */ Screen)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Screen = /*#__PURE__*/function () {
  function Screen(width, heigth) {
    _classCallCheck(this, Screen);
    this.width = width;
    this.heigth = heigth;
    this.canvas = this.createCanvas();
    this.canvas.width = width;
    this.canvas.height = heigth;
    this.contex = this.canvas.getContext('2d');
  }
  _createClass(Screen, [{
    key: "createCanvas",
    value: function createCanvas() {
      var elements = document.getElementsByTagName('canvas');
      if (elements.length > 0) {
        return elements[0];
      }
      var canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
      return canvas;
    }
  }]);
  return Screen;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

//запускаем игру
window.onload = function () {
  var electronika = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();
  electronika.run();
};
console.log('Работает');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUUzQixJQUFNQyxJQUFJO0VBQ2IsZ0JBQWM7SUFBQTtJQUNWO0lBQ0EsSUFBSSxDQUFDRCxNQUFNLEdBQUcsSUFBSUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFFdEM7RUFBQztJQUFBO0lBQUEsT0FFRCxlQUFNQyxJQUFJLEVBQUU7TUFBQTtNQUNSQyxxQkFBcUIsQ0FBQyxVQUFBRCxJQUFJO1FBQUEsT0FBSSxLQUFJLENBQUNFLEtBQUssQ0FBQ0YsSUFBSSxFQUFFLENBQUM7TUFBQSxFQUFDO0lBQ3JEO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZUFBTTtNQUFBO01BQ0ZDLHFCQUFxQixDQUFDLFVBQUFELElBQUk7UUFBQSxPQUFJLE1BQUksQ0FBQ0UsS0FBSyxDQUFDRixJQUFJLEVBQUUsQ0FBQztNQUFBLEVBQUM7SUFDckQ7RUFBQztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEUsSUFBTUQsTUFBTTtFQUNmLGdCQUFZSSxLQUFLLEVBQUVDLE1BQU0sRUFBRTtJQUFBO0lBQ3ZCLElBQUksQ0FBQ0QsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsWUFBWSxFQUFFO0lBQ2pDLElBQUksQ0FBQ0QsTUFBTSxDQUFDRixLQUFLLEdBQUdBLEtBQUs7SUFDekIsSUFBSSxDQUFDRSxNQUFNLENBQUNFLE1BQU0sR0FBR0gsTUFBTTtJQUMzQixJQUFJLENBQUNJLE1BQU0sR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztFQUM5QztFQUFDO0lBQUE7SUFBQSxPQUNELHdCQUFlO01BQ1gsSUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztNQUN0RCxJQUFJRixRQUFRLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsT0FBT0gsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUN0QjtNQUNBLElBQUlMLE1BQU0sR0FBR00sUUFBUSxDQUFDRyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQzdDSCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDWCxNQUFNLENBQUM7TUFDakMsT0FBT0EsTUFBTTtJQUNqQjtFQUFDO0VBQUE7QUFBQTs7Ozs7O1VDakJMO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDOUI7QUFDQVksTUFBTSxDQUFDQyxNQUFNLEdBQUcsWUFBTTtFQUNsQixJQUFNQyxXQUFXLEdBQUcsSUFBSXJCLHVDQUFJLEVBQUU7RUFDOUJxQixXQUFXLENBQUNDLEdBQUcsRUFBRTtBQUNyQixDQUFDO0FBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb25pa2EvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9lbGVjdHJvbmlrYS8uL3NyYy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25pa2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25pa2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VsZWN0cm9uaWthL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25pa2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVjdHJvbmlrYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8v0YHQvtC30LTQsNC10Lwg0YDQsNC30LzQtdGAINGN0LrRgNCw0L3QsFxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbig2MDAsIDQwMClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSgpKSk7XHJcbiAgICB9XHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKCkpKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlndGgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlndGggPSBoZWlndGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ3RoO1xyXG4gICAgICAgIHRoaXMuY29udGV4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcbi8v0LfQsNC/0YPRgdC60LDQtdC8INC40LPRgNGDXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVjdHJvbmlrYSA9IG5ldyBHYW1lKCk7XHJcbiAgICBlbGVjdHJvbmlrYS5ydW4oKTtcclxufVxyXG5jb25zb2xlLmxvZygn0KDQsNCx0L7RgtCw0LXRgicpO1xyXG4iXSwibmFtZXMiOlsic2NyZWVuIiwiR2FtZSIsIlNjcmVlbiIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIndpZHRoIiwiaGVpZ3RoIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiaGVpZ2h0IiwiY29udGV4IiwiZ2V0Q29udGV4dCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJlbGVjdHJvbmlrYSIsInJ1biIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9