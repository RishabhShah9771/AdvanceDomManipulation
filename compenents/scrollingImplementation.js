export function scrollingImplementation() {
  const buttonScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  buttonScrollTo.addEventListener('click', function (e) {
    e.preventDefault();

    section1.scrollIntoView({ behavior: 'smooth' });
  });

  // Page Navigation : Using Delegation
  // Example of Bubble phase and target phase  of the event propagation.
  // And to perform the capture phase we can add third parameter to the addEventListener method which is true.
  // The default value of the capture phase is false.
  // RGB(255,255,255)
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
  document.querySelector('.nav__link').addEventListener('click', function (e) {
    e.currentTarget.style.backgroundColor = randomColor();
    e.stopPropagation();
  });
  document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
  });
  document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
  });

  // Event Delegation
  // It is a technique where we put the event listener on the parent element and then determine what element originated the event.
  // This is useful when we have many child elements that we are interested in.
}
