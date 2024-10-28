const slider = document.querySelector(".slider");
const upperImg = document.querySelector(".bottom");

slider.addEventListener("mousemove",(e)=>{
    const containerRect = slider.getBoundingClientRect();
    const y= e.clientY;

    let height = containerRect.height;
    let percentage = (y / height) * 100;
    console.log(y);
    
})