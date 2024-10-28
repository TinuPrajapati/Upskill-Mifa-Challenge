const body = document.body;
const front = document.querySelector("section");

const maxHeight = body.offsetHeight;
const viewportHeight = window.innerHeight;
const maxScrollPosition = maxHeight - viewportHeight;

let top1 = 35
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  let width = Math.ceil((scrollPosition/maxScrollPosition)*100);
  front.style.clipPath=`circle(${width*2}% at left center)`
});