const body = document.querySelector("body");
const slider = document.querySelector(".slider");

slider.addEventListener("mousedown",()=>{
  slider.addEventListener("mousemove", (e) => {
  
    const x = e.clientX;
    slider.style.transform = `translateX(${-x}px)`;
  })
})
