/* —————————  Cursor  ————————————————————————————————————————————— */
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

let links = Array.from(document.querySelectorAll("a, button, span, i, .myname, .email"));
console.log(links);

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});


/* —————————  Active links  ————————————————————————————————————————————— */
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page')
  }
});


/* —————————  mobile menu  ———————————————————————————————————————— */
const mobile = document.querySelector(".mobile");
const mobile2 = document.querySelector(".mobile2");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo-mobile");


const mobileMenu = () => {
  mobile.classList.toggle("active");
  mobile2.classList.toggle("active");
  navMenu.classList.toggle("active");
  logo.classList.toggle("active");
}

mobile.addEventListener("click", mobileMenu);
mobile2.addEventListener("click", mobileMenu);
