document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelector(".stars");

  // when star is clicked, remove gold styles and then add them up
  // to the item that was click
  stars.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      let isStarsSet = e.target.classList.contains("gold");
      let isLastStar = e.target.previousElementSibling ?
        !e.target.previousElementSibling.classList.contains("gold") : true;

      // Reset and Remove gold class
      e.target.classList.remove("gold");
      for (let star of stars.children) {
        star.classList.remove("gold");
      }

      // if the clicked star was previously active,
      // return early and don't paint stars
      if (isStarsSet && isLastStar) {
        return;
      }

      // paint all stars with gold class
      e.target.classList.add("gold");

      let sibling = e.target.nextElementSibling;

      while (sibling) {
        sibling.classList.add("gold");
        sibling = sibling.nextElementSibling;
      }
    }
  });
});
