// Page Transition
window.onload = () => {
  const transition = document.querySelector(".transition");
  const atags = document.querySelector("a");
  

  setTimeout(() => {
    transition.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < atags.length; i++) {
    const atag = atags[i];
  
    atag.addEventListener("click", e => {
      e.preventDefault();
      let target = e.target.href;

      console.log('target');
      
      transition.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);

    });

  }
  
}