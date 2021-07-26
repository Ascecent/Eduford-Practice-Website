const navLinks = document.getElementById("navLinks");
const htmlDoc = document.getElementsByTagName("html")[0];

function openMenu() {
  /* Set the page scroll to zero */
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  htmlDoc.style.overflow = "hidden";
  navLinks.style.right = "0";
}

function closeMenu() {
  htmlDoc.style.overflow = "auto";
  navLinks.style.right = "-15rem";
}

/* Slown down scroll function */

const main = document.getElementById("main");

function slowDownScroll() {
  window.scroll({
    top: main.offsetTop,
    behavior: "smooth",
  });
}
