/* —————————  Global  ————————————————————————————————————————————— */
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
