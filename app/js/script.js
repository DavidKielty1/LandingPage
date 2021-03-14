const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("heeeeeey, clickerr");

  if (header.classList.contains("open")) {
    //Close Hamburger Menu
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      body.classList.remove("noscroll");
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //Open Hamburger Menu
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      body.classList.add("noscroll");
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
