const button = document.getElementById('home');

button.addEventListener('click', () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  
  if (scrollTop + viewportHeight >= docHeight - 10) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    
    window.scrollBy({
      top: docHeight,
      behavior: 'smooth'
    });
  }
});
function updateButtonText() {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + viewportHeight >= docHeight - 10){
        button.textContent = '<';
    }
    else {
        button.textContent = '>';
    }
}
window.addEventListener('scroll', updateButtonText);
window.addEventListener('load', updateButtonText);


    const scrollContainer = document.getElementById("scrollContainer");
    const scrollLeft = document.getElementById("scrollLeft");
    const scrollRight = document.getElementById("scrollRight");

    const scrollAmount = 535; // pixels to scroll each click

    scrollRight.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    scrollLeft.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
