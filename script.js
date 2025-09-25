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
      top: viewportHeight,
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