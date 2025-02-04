const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(e)=>{

    const X = e.pageX - btnEl.offsetLeft;
    const y = e.pageY - btnEl.offsetTop;
    
    btnEl.style.setProperty("--posX", X + "px")
    btnEl.style.setProperty("--posY", y + "px")
})