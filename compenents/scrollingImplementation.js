export function scrollingImplementation() {
  const buttonScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  buttonScrollTo.addEventListener('click', function (e) {
    e.preventDefault();

    section1.scrollIntoView({ behavior: 'smooth' });
  });

  // PAGE NAVIGATION: USING DELEGATION.

  // 1. Add event listener to the common parent element of the navigation links
  document.querySelector('.nav__links').addEventListener('click', e => {
    e.preventDefault(); // Prevent default anchor link behavior

    // 2. Determine the element that triggered the event
    if (e.target.classList.contains('nav__link')) {
      // Check if the clicked element has the class 'nav__link'

      // 3. Get the target section ID from the href attribute of the clicked link
      const targetId = e.target.getAttribute('href');

      // 4. Scroll to the target section smoothly
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
}
