// ——————————————————————————————————— Navigation ————————————
// Cursor
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
};

let links = Array.from(document.querySelectorAll("a, button, span, i, .phone, .myname, .email"));
console.log(links);

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});


// ——————————————————————————————————— Hero section —————————— 

// Writing Letters
// const textWrapper = document.querySelector(".myname");



// function nameAnim() {
  // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // anime.timeline({ loop: false })
    // .add({
    //   targets: '.m12 .letter',
    //   scale: [4, 1],
    //   opacity: [0, 1],
    //   translateZ: 0,
    //   easing: "easeOutExpo",
    //   duration: 1000,
    //   delay: (el, i) => 300 * i
    // })
    // .add({
    //   targets: '.zip .letter',
    //   scale: [0.2, 1],
    //   opacity: [0, 1],
    //   borderColor: '#fff',
    //   translateZ: 0,
    //   easing: "easeOutExpo",
    //   duration: 1000,
    //   delay: (el, i) => 200 * (i + 1)
    // });
// }
  
// nameAnim();
// .add({
//   targets: '.m12',
//   opacity: 0,
//   duration: 1000,
//   easing: "easeOutExpo",
//   delay: 100
// });
// textWrapper.innerHTML = " ";

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


// ——————————————————————————————————— Projects section —————————— 
// mac slides
// const slides = document.querySelectorAll(".projects");

// window.addEventListener("scroll", macSlides);

// checkBoxes();

// function macSlides() {
//   const triggerBottom = window.innerHeight;

//   console.log(window.innerHeight);


//   slides.forEach(slide => {
//     const slideTop = slide.getBoundingClientRect().top;

//     if (slideTop < triggerBottom) {
//       slide.classList.add("show")
//     } else {
//       slide.classList.remove("show")
//     }
//   });

// }




// ——————————————————————————————————— 1st Slider —————————— 
// const pages = document.querySelectorAll(".page");
// const translateAmount = 100;
// let translate = 0;

// slide = (direction) => {
//   direction === "next" ? translate -= translateAmount : translate += translateAmount;

//   pages.forEach(
//     pages => (pages.style.transform = `translateX(${translate}%)`)
//   );
// }


// ——————————————————————————————————— 2nd Slider —————————— 

const slidesContainer = document.querySelector("#slides-container");
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

// ——————————————————————————————————— Contact —————————— 




