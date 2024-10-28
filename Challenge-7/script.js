const front = document.querySelectorAll(".front img");
const back = document.querySelector(".back img");

front.forEach(element => {
    element.addEventListener("mouseover",()=>{
        let src = element.getAttribute("src")
        back.setAttribute("src",src)
    })
});

