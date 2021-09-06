export function start() {
    const button = document.querySelector("button");
    button?.addEventListener("click", handleClick);
}


function handleClick(this:HTMLElement, ev: Event) {
    ev.preventDefault();
    this.innerText ="강아지"; 
}