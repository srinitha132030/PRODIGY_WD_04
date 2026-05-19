window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const winHeight = window.innerHeight;
    if (pos < winHeight - 100) {
      el.classList.add("visible");
    }
  });
});