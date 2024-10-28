const btn = document.querySelector("button");

btn.addEventListener("mouseover", (e) => {
  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  btn.style.top = `${randomY}px`;
  btn.style.left = `${randomX}px`;
  btn.style.position = "absolute";
});