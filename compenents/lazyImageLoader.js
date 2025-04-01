import { imgTargets } from './domElements.js';
const lazyImageLoader = () => {
  // Lazy Loading Images
  // Select all images with the 'data-src' attribute. These are the images that will be lazy-loaded.

  // Function to handle the loading of images when they intersect with the viewport
  const loadImage = function (entries, observe) {
    // Destructure the first entry from the entries array
    const [entry] = entries;

    // If the image is not intersecting with the viewport, exit the function
    if (!entry.isIntersecting) return;

    // Replace the 'src' attribute of the image with the value of its 'data-src' attribute
    entry.target.src = entry.target.dataset.src;

    // Once the image is loaded, remove the 'lazy-img' class to apply any final styles
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });

    // Stop observing the image once it has been loaded to improve performance
    observe.unobserve(entry.target);
  };

  // Create a new IntersectionObserver to observe when images enter the viewport
  const imgObserver = new IntersectionObserver(loadImage, {
    root: null, // Use the viewport as the root
    threshold: 0, // Trigger the callback as soon as any part of the image is visible
    rootMargin: '200px', // Start loading images 200px before they enter the viewport
  });

  // Observe each image target for intersection events
  imgTargets.forEach(img => imgObserver.observe(img));
};

// Export the lazyImageLoader function as the default export
export default lazyImageLoader;
