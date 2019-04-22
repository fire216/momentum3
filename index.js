const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleClick) 
//handleResize() 는 즉시 호출할때