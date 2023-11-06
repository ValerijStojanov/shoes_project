let currentSlide = 1;
let isPaused = false; 

const changeSlide = () => {
  if (!isPaused) {

    document.querySelectorAll('.zoom-container').forEach((container) => {
      container.classList.remove('can-zoom');
    });

    const activeSlide = document.getElementById(`s${currentSlide}`);
    activeSlide.checked = true;
  }
};

const pauseSlide = () => {
  isPaused = true;
};

let burgerMenu = document.querySelector('.burger-menu');
let navLinks = document.querySelector('.ul_navbar_left_side');
let bars = document.querySelectorAll('.bar');

let isMenuOpen = false;

burgerMenu.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;

  bars.forEach(bar => {
    bar.style.backgroundColor = isMenuOpen ? 'green' : ''; 
  });
});

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu');
});

