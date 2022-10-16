// ——————————————————————————————————— Home page —————————— 
// Current Scroll

const showScroll = document.querySelector(".show-scroll");

window.addEventListener('scroll', function() {
  showScroll.innerHTML = parseInt(window.pageYOffset/18) + '%' + ' ' +  '<span class="fscreen-text">f/scr</span>';
});


// Text on-scroll animation

const myname = document.querySelector(".myname");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const arrow = document.querySelector(".arrow");


window.onscroll = () => {
  let pos = window.scrollY - (-50);
  let posi = window.scrollY - (-350);
  myname.style.left = `${pos}px`;
  line2.style.right = `${pos}px`;
  line3.style.left = `${pos}px`;
  arrow.style.top = `${posi}px`;
}


// ——————————————————————————————————— Work page —————————— 
// Slider 

const slidesContainer = document.querySelector(".slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector("#slide-arrow-prev");
const nextButton = document.querySelector("#slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


