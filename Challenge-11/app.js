const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const position = btn.getBoundingClientRect(); // getBoundingClientRect, not getBoundingClientReact
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2; // e.clientY, not e.clientX

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`; // translate, not just parentheses
  });
});