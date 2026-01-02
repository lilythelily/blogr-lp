"use strict";

const dropdownTitles = document.querySelectorAll(".drop-menu");
const dropdownUls = document.querySelectorAll(".dropdown-ul");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");
const accordionTitles = document.querySelectorAll(".accordion-title");
const overlay = document.querySelector(".overlay");

// === top nav drop down control ===

function displayElement(item) {
  item.classList.toggle("hide");
  item.classList.toggle("flex");
}

function rotate(item) {
  item.classList.toggle("turn");
}

function removeRotate(item) {
  item.classList.toggle("unturn");
}

function toggleHide(item) {
  item.classList.toggle("hide");
}

dropdownTitles.forEach((title) => {
  const nextSibling = title.nextElementSibling;
  const lastChild = title.lastElementChild;
  title.addEventListener("click", (e) => {
    dropdownUls.forEach((item) => {
      if (item !== e.target.nextElementSibling) {
        item.classList.add("hide");
        item.classList.remove("flex");
      }
    });
    if (lastChild.classList.contains("turn")) {
      displayElement(nextSibling);
      removeRotate(lastChild);
    } else {
      displayElement(nextSibling);
      rotate(lastChild);
    }
  });
});

// === hamburger menu control ===

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  hamburgerMenu.classList.remove("slide-out");
  hamburgerMenu.classList.add("slide-in");
  toggleHide(closeBtn);
  toggleHide(overlay);
});

closeBtn.addEventListener("click", () => {
  toggleHide(closeBtn);
  hamburgerIcon.style.display = "block";
  hamburgerMenu.classList.add("slide-out");
  toggleHide(overlay);
});

// ===click outside to close the menu===

overlay.addEventListener("click", () => {
  toggleHide(closeBtn);
  hamburgerIcon.style.display = "block";
  hamburgerMenu.classList.add("slide-out");
  toggleHide(overlay);
});

// === menu accoridon panel control ===

accordionTitles.forEach((title) => {
  const nextSibling = title.nextElementSibling;
  const lastChild = title.lastElementChild;
  title.addEventListener("click", () => {
    if (lastChild.classList.contains("turn")) {
      displayElement(nextSibling);
      removeRotate(lastChild);
    } else {
      displayElement(nextSibling);
      rotate(lastChild);
    }
  });
});

// === scroll to top ===

const footerLogo = document.querySelector(".footer-logo");

footerLogo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
