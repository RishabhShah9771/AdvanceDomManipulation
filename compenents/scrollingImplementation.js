import { buttonScrollTo, section1, navLinks, nav } from './domElements.js';

// Function to implement scrolling and navigation-related features
export function scrollingImplementation() {
  // Smooth scrolling to Section 1 when the button is clicked
  buttonScrollTo.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default button behavior

    // Scroll to Section 1 with smooth scrolling behavior
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  // PAGE NAVIGATION: USING EVENT DELEGATION

  // 1. Add event listener to the common parent element of the navigation links
  navLinks.addEventListener('click', e => {
    e.preventDefault(); // Prevent default anchor link behavior

    // 2. Check if the clicked element is a navigation link
    if (e.target.classList.contains('nav__link')) {
      // 3. Get the target section ID from the href attribute of the clicked link
      const targetId = e.target.getAttribute('href');

      // 4. Scroll to the target section smoothly
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });

  // HOVER EFFECT ON NAVIGATION LINKS

  // Function to handle hover effect on navigation links
  function handleHover(e, opacity) {
    // Check if the hovered element is a navigation link
    if (e.target.classList.contains('nav__link')) {
      const link = e.target; // Get the hovered link
      const siblings = link.closest('.nav').querySelectorAll('.nav__link'); // Get all navigation links
      const logo = link.closest('.nav').querySelector('.nav__logo'); // Get the navigation logo

      // Adjust opacity for sibling links and logo
      siblings.forEach(el => {
        if (el !== link) {
          // Reduce opacity for sibling links on hover, reset on mouseout
          el.style.opacity = this;
        }
      });
      // Adjust opacity for the logo
      logo.style.opacity = this;
    }
  }

  // Add event listeners for mouseover and mouseout to implement hover effect
  // Bind method is used to set the value of 'this' in the handleHover function
  // Passing 0.5 for mouseover to reduce opacity and 1 for mouseout to reset opacity
  nav.addEventListener('mouseover', handleHover.bind(0.5)); // Trigger hover effect on mouseover
  nav.addEventListener('mouseout', handleHover.bind(1)); // Reset hover effect on mouseout
}
