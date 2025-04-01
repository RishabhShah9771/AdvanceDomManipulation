import {
  slides,
  btnSliderLeft,
  btnSliderRight,
  dotContainer,
} from './domElements.js';

// Function to create navigation dots for each slide
const createDots = () => {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};

// Function to activate a specific dot based on the current slide
const activateDot = slide => {
  // Remove active class from all dots
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  // Add active class to the dot corresponding to the current slide
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

// Function to position slides based on the current slide index
const handleSlider = slide => {
  slides.forEach((slideEl, index) => {
    // Translate each slide horizontally based on its position relative to the current slide
    slideEl.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

// Main function to implement the slider functionality
const sliderImplementation = () => {
  let currentSlide = 0; // Track the current slide index
  const maxSlide = slides.length - 1; // Maximum slide index

  // Function to move to the next slide
  const goToNextSlide = () => {
    currentSlide = currentSlide === maxSlide ? 0 : currentSlide + 1; // Loop back to the first slide if at the last slide
    updateSlider();
  };

  // Function to move to the previous slide
  const goToPrevSlide = () => {
    currentSlide = currentSlide === 0 ? maxSlide : currentSlide - 1; // Loop back to the last slide if at the first slide
    updateSlider();
  };

  // Function to update the slider (position slides and activate the corresponding dot)
  const updateSlider = () => {
    handleSlider(currentSlide); // Update slide positions
    activateDot(currentSlide); // Highlight the active dot
  };

  // Event handler for keyboard navigation (left and right arrow keys)
  const handleKeydown = e => {
    if (e.key === 'ArrowLeft') goToPrevSlide(); // Navigate to the previous slide
    if (e.key === 'ArrowRight') goToNextSlide(); // Navigate to the next slide
  };

  // Event handler for dot navigation (clicking on dots)
  const handleDotClick = e => {
    if (e.target.classList.contains('dots__dot')) {
      currentSlide = Number(e.target.dataset.slide); // Get the slide index from the clicked dot
      updateSlider(); // Update the slider to the selected slide
    }
  };

  // Function to initialize the slider
  const initializeSlider = () => {
    handleSlider(0); // Set the initial position of slides
    createDots(); // Create navigation dots
    activateDot(0); // Activate the first dot
  };

  // Event listeners
  btnSliderRight.addEventListener('click', goToNextSlide); // Navigate to the next slide on right button click
  btnSliderLeft.addEventListener('click', goToPrevSlide); // Navigate to the previous slide on left button click
  document.addEventListener('keydown', handleKeydown); // Enable keyboard navigation
  dotContainer.addEventListener('click', handleDotClick); // Enable dot navigation

  // Initialize the slider
  initializeSlider();
};

// Export the slider implementation function
export { sliderImplementation };
