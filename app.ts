const button:HTMLElement = document.querySelector("button");
const h1:HTMLElement = document.querySelector("h1");


function textChange():void{
    h1.innerText = "강아지";
}



button.addEventListener("click", textChange);