var button = document.querySelector("button");
var h1 = document.querySelector("h1");
function textChange() {
    h1.innerText = "강아지";
}
button.addEventListener("click", textChange);
