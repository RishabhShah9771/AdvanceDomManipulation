import {
  buttonScrollTo,
  section1,
  navLinks,
  nav,
  allSections,
} from './domElements.js';
import lazyImageLoader from './lazyImageLoader.js';

// Function to implement scrolling, navigation, and other DOM-related features
export function scrollingImplementation() {
  // Smooth scrolling to Section 1 when the button is clicked
  buttonScrollTo.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default button behavior (e.g., jumping to a link)

    // Scroll to Section 1 with smooth scrolling behavior
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  // PAGE NAVIGATION: USING EVENT DELEGATION

  // 1. Add a single event listener to the common parent element of the navigation links
  navLinks.addEventListener('click', e => {
    e.preventDefault(); // Prevent default anchor link behavior (e.g., jumping to a section)

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
          el.style.opacity = this; // 'this' is bound to the opacity value
        }
      });
      // Adjust opacity for the logo
      logo.style.opacity = this; // 'this' is bound to the opacity value
    }
  }

  // Add event listeners for mouseover and mouseout to implement hover effect
  // Bind method is used to set the value of 'this' in the handleHover function
  // Passing 0.5 for mouseover to reduce opacity and 1 for mouseout to reset opacity
  nav.addEventListener('mouseover', handleHover.bind(0.5)); // Trigger hover effect on mouseover
  nav.addEventListener('mouseout', handleHover.bind(1)); // Reset hover effect on mouseout

  // INTERSECTION OBSERVER API: Sticky Navigation

  // Select the header element to observe
  const header = document.querySelector('.header');

  // Get the height of the navigation bar to use as an offset
  const navHeight = nav.getBoundingClientRect().height;

  // Create a new IntersectionObserver instance to observe the header
  const headerObserver = new IntersectionObserver(
    entries => {
      // Destructure the first entry from the entries array
      const [entry] = entries;

      // Check if the header is not intersecting with the viewport
      if (!entry.isIntersecting) {
        // Add the 'sticky' class to the navigation bar when the header is out of view
        nav.classList.add('sticky');
      } else {
        // Remove the 'sticky' class when the header is back in view
        nav.classList.remove('sticky');
      }
    },
    {
      // Root element for the observer (null means the viewport)
      root: null,

      // Threshold at which the callback is triggered (0 means any intersection)
      threshold: 0,

      // Adjust the root margin to trigger the callback earlier or later
      // '-90px' ensures the sticky class is applied when the header is 90px out of view
      rootMargin: `-${navHeight}px`,
    }
  );

  // Start observing the header element for intersection changes
  headerObserver.observe(header);

  // REVEAL SECTIONS ON SCROLL

  // Select all sections to observe for revealing on scroll

  // Create a new IntersectionObserver instance to observe sections
  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      // Loop through each entry (section) being observed
      entries.forEach(entry => {
        // Check if the section is not intersecting with the viewport
        if (!entry.isIntersecting) return; // Exit if the section is not visible

        // Remove the 'section--hidden' class to reveal the section
        entry.target.classList.remove('section--hidden');

        // Stop observing the section once it has been revealed
        observer.unobserve(entry.target);
      });
    },
    {
      // Root element for the observer (null means the viewport)
      root: null,

      // Threshold at which the callback is triggered (15% of the section is visible)
      threshold: 0.15,
    }
  );

  // Loop through all sections and observe each one
  allSections.forEach(section => {
    // Start observing the section for intersection changes
    sectionObserver.observe(section);

    // Initially add the 'section--hidden' class to hide the section
    section.classList.add('section--hidden');
  });

  // LAZY LOADING IMAGES

  // Call the lazyImageLoader function to implement lazy loading for images
  lazyImageLoader();
}
