// ——————————————————————————————————— Navigation ————————————

// Current Scroll
const showScroll = document.querySelector(".show-scroll");


window.addEventListener('scroll', function() {
  showScroll.innerHTML = parseInt(window.pageYOffset/18) + '%' + ' ' +  '<span class="fscreen-text">f/scr</span>';
});



// Cursor
// let innerCursor = document.querySelector(".inner-cursor");
// let outerCursor = document.querySelector(".outer-cursor");

// document.addEventListener('mousemove', moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;

//   innerCursor.style.left = `${x}px`;
//   innerCursor.style.top = `${y}px`;
//   outerCursor.style.left = `${x}px`;
//   outerCursor.style.top = `${y}px`;
// };

// let links = Array.from(document.querySelectorAll("a, button, span, i, .myname, .email"));
// console.log(links);

// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//   });
//   link.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//   });
// });


// ——————————————————————————————————— Home page —————————— 
//Hero text on-scroll animation

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


// ——————————————————————————————————— 2nd Slider —————————— 

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


