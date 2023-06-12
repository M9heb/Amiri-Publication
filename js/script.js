"use strict";
const activeElement = document.querySelector(".nav-element__active");
const passiveElements = document.querySelectorAll(".nav--element");
console.log(passiveElements);
for (let i = 0; i < passiveElements.length; i++) {
  passiveElements[i].addEventListener("click", function () {
    for (let i = 0; i < passiveElements.length; i++) {
      passiveElements[i].classList.remove("nav-element__active");
    }
    passiveElements[i].classList.add("nav-element__active");
  });
}
const navCloser = document.querySelector(".nav-closer");
navCloser.addEventListener("click", function () {
  const nav = document.querySelector(".right-nav");
  nav.classList.toggle("closed");
});

document.querySelector(".profile-icon").addEventListener("click", function () {
  document.querySelector(".pop-up").classList.toggle("display-none");
});
