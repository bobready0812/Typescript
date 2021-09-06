"use strict";
exports.__esModule = true;
exports.start = void 0;
function start() {
    var button = document.querySelector("button");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", handleClick);
}
exports.start = start;
function handleClick(ev) {
    ev.preventDefault();
    this.innerText = "강아지";
}
