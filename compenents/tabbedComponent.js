// Import necessary DOM elements from the domElements.js module
import { tabs, tabsContainer, tabsContent } from './domElements.js';

/**
 * Tabbed Component Functionality
 * This function handles the behavior of a tabbed component, allowing users to switch between tabs
 * and display the corresponding content dynamically.
 */
export function tabbedComponent() {
  // Add an event listener to the tabs container to handle clicks on tabs
  tabsContainer.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior of the click event

    // Identify the clicked tab
    // Find the closest parent element with the class 'operations__tab' to the clicked element
    const clicked = e.target.closest('.operations__tab');

    // Guard Clause: If no tab is clicked, exit the function
    if (!clicked) return;

    // Reset the state of all tabs
    // Remove the active class from all tabs to ensure only one tab is active at a time
    tabs.forEach(t => t.classList.remove('operations__tab--active'));

    // Reset the state of all content areas
    // Remove the active class from all content areas to ensure only one content area is active at a time
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate the clicked tab
    // Add the active class to the clicked tab to visually highlight it
    clicked.classList.add('operations__tab--active');

    // Activate the corresponding content area
    // Use the data-tab attribute of the clicked tab to identify and activate the matching content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });
}
