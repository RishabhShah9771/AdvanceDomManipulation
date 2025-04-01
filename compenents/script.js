'use strict';

// Importing required DOM elements and functionalities from other modules
import { modal, overlay, btnCloseModal, btnsOpenModal } from './domElements.js'; // Importing DOM elements for modal functionality
import { scrollingImplementation } from './scrollingImplementation.js'; // Importing scrolling functionality
import { sliderImplementation } from './SliderImplementation.js'; // Importing slider functionality
import { tabbedComponent } from './tabbedComponent.js'; // Importing tabbed component functionality

// Function to handle modal functionality
const handleModalFunctionality = function () {
  // Function to open the modal
  const openModal = function (event) {
    event.preventDefault(); // Prevent default behavior (e.g., link navigation)
    modal.classList.remove('hidden'); // Remove 'hidden' class to display the modal
    overlay.classList.remove('hidden'); // Remove 'hidden' class to display the overlay
  };

  // Function to close the modal
  const closeModal = function () {
    modal.classList.add('hidden'); // Add 'hidden' class to hide the modal
    overlay.classList.add('hidden'); // Add 'hidden' class to hide the overlay
  };

  // Add click event listeners to all buttons that open the modal
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

  // Alternative way to add event listeners using a for loop (commented out)
  // for (let i = 0; i < btnsOpenModal.length; i++)
  //   btnsOpenModal[i].addEventListener('click', openModal);

  // Add click event listener to the close button to close the modal
  btnCloseModal.addEventListener('click', closeModal);

  // Add click event listener to the overlay to close the modal when clicking outside
  overlay.addEventListener('click', closeModal);

  // Add keydown event listener to close the modal when the 'Escape' key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(); // Close the modal if it is currently open
    }
  });
};

// Call the function to initialize modal functionality
handleModalFunctionality(); // Sets up event listeners for modal open/close functionality

// Initialize scrolling functionality (imported from another module)
scrollingImplementation(); // Enables smooth scrolling behavior for the page

// Initialize tabbed component functionality (imported from another module)
tabbedComponent(); // Sets up tabbed navigation functionality

// Initialize slider functionality (imported from another module)
sliderImplementation(); // Enables slider/carousel functionality
