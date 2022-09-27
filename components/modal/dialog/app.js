document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open");
  const closeBtn = document.querySelector(".close");
  const dialog = document.querySelector(".dialog");

  openBtn.addEventListener("click", () => dialog.showModal());
  closeBtn.addEventListener("click", () => dialog.close());
});
