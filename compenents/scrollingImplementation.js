export function scrollingImplementation() {
  const buttonScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  buttonScrollTo.addEventListener('click', function (e) {
    e.preventDefault();

    section1.scrollIntoView({ behavior: 'smooth' });
  });
}
