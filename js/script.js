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

// Order row
function addOrder() {
  const orderRow = document.getElementById("order-row");

  const newRow = document.createElement("div");
  newRow.className = "row my-5 order";
  newRow.innerHTML = `
    <div class="col v-flex v-f-gap-16">
      <label class="label">نوع سفارش</label>
      <input type="text" class="text-input ordertype" placeholder="بنر، فاکتور..." />
    </div>
    <div class="col-2 v-flex v-f-gap-16">
      <label for="amount" class="label">تعداد</label>
      <input type="text" class="text-input amount" placeholder="1000" />
    </div>
    <div class="col-2 v-flex v-f-gap-16">
      <label for="cost" class="label">قیمت</label>
      <input type="text" class="text-input cost" placeholder="1200" />
    </div>
    <a href="#" class="col-1 btn btn--primary align-self-end mx-lg-2 add-btn">
      <svg class="icon" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.9913 38.85C23.3304 38.85 22.775 38.6229 22.325 38.1688C21.875 37.7146 21.65 37.1583 21.65 36.5V26.35H11.5C10.8417 26.35 10.2854 26.1221 9.83127 25.6663C9.37711 25.2104 9.15002 24.6521 9.15002 23.9913C9.15002 23.3304 9.37711 22.775 9.83127 22.325C10.2854 21.875 10.8417 21.65 11.5 21.65H21.65V11.5C21.65 10.8417 21.8779 10.2854 22.3338 9.83125C22.7896 9.37708 23.348 9.15 24.0088 9.15C24.6696 9.15 25.225 9.37708 25.675 9.83125C26.125 10.2854 26.35 10.8417 26.35 11.5V21.65H36.5C37.1584 21.65 37.7146 21.8779 38.1688 22.3338C38.6229 22.7896 38.85 23.348 38.85 24.0088C38.85 24.6696 38.6229 25.225 38.1688 25.675C37.7146 26.125 37.1584 26.35 36.5 26.35H26.35V36.5C26.35 37.1583 26.1221 37.7146 25.6663 38.1688C25.2104 38.6229 24.6521 38.85 23.9913 38.85Z"/>
      </svg>
    </a>
    <a href="#" class="col-1 btn btn--cancel align-self-end mx-lg-2 delete-btn">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
        <path d="M253-95q-39.462 0-67.231-27.475Q158-149.95 158-189v-553h-11q-19.75 0-33.375-13.675Q100-769.351 100-789.175 100-809 113.625-822.5 127.25-836 147-836h185q0-20 13.625-34T379-884h202q19.625 0 33.812 14.188Q629-855.625 629-836h184q19.75 0 33.375 13.675Q860-808.649 860-788.825 860-769 846.375-755.5 832.75-742 813-742h-11v553q0 39.05-27.769 66.525Q746.463-95 707-95H253Zm0-647v553h454v-553H253Zm101 437q0 15.475 11.368 26.737 11.369 11.263 27 11.263Q408-267 419.5-278.263 431-289.525 431-305v-322q0-15.475-11.868-27.237Q407.263-666 391.632-666 376-666 365-654.237 354-642.475 354-627v322Zm175 0q0 15.475 11.868 26.737Q552.737-267 568.368-267 584-267 595.5-278.263 607-289.525 607-305v-322q0-15.475-11.57-27.237Q583.86-666 567.93-666t-27.43 11.763Q529-642.475 529-627v322ZM253-742v553-553Z"/>
      </svg>
    </a>`;

  orderRow.appendChild(newRow);
}

function deleteOrder(event) {
  const orderRow = event.target.closest(".order");
  const orderContainer = document.getElementById("order-row");

  if (orderContainer.children.length > 1) {
    orderRow.remove();
  }
}

document.addEventListener("click", function (event) {
  if (event.target.closest(".add-btn")) {
    event.preventDefault();
    addOrder();
  } else if (event.target.closest(".delete-btn")) {
    event.preventDefault();
    deleteOrder(event);
  }
});

// font-size settings

const htmlsize = document.getElementsByTagName("html");
const slider = document.querySelector(".range-input");
const inputValueBox = document.querySelector(".range-value");
if (document.cookie) {
  slider.value = getFontSize();
  inputValueBox.innerHTML = getFontSize();
  htmlsize[0].style.fontSize = `${getFontSize()}%`;
} else {
  inputValueBox.innerHTML = slider.value + "%";
}

slider.addEventListener("input", function () {
  setFontSize(this.value);
  inputValueBox.innerHTML = getFontSize();
  htmlsize[0].style.fontSize = `${getFontSize()}%`;
});

function setFontSize(size) {
  localStorage.setItem("fontSize", size);
}
function getFontSize() {
  return localStorage.getItem("fontSize");
}
