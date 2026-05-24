// Card entrance animation
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 150);
});
