var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop:true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: -50,
    modifier: 2.5,
    slideShadows: true,
  },
});