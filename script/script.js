let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    // Remove 'can-zoom' class from all slides
    document.querySelectorAll('.zoom-container').forEach((container) => {
      container.classList.remove('can-zoom');
    });

    // Set the active slide
    const activeSlide = document.getElementById(`s${currentSlide}`);
    activeSlide.checked = true;
  }
};

// Start the auto-scroll
// let slideInterval = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

