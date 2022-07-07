let Underline = document.getElementById("underline");
let UnderMenus = document.querySelectorAll("nav:first-child a")
console.log(UnderMenus);

UnderMenus.forEach(menu=>menu.addEventListener("click",(e)=>horizon(e)))

function horizon(e){
    Underline.style.left = e.currentTarget.offsetLeft + "px";
    Underline.style.width = e.currentTarget.offsetWidth + "px";
    Underline.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px;"
}

//offset