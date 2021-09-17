const btn = document.querySelector("button");
const container = document.querySelector(".split");

btn.addEventListener("click", () => {
  container.classList.toggle("active");
});
