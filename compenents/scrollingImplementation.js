export function scrollingImplementation() {
  const buttonScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  buttonScrollTo.addEventListener('click', function (e) {
    e.preventDefault();
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    // getBoundingClientRect() returns the size of an element and its position relative to the viewport.
    console.log(e.target.getBoundingClientRect());

    // to find x and y corrdinates of the target element.
    console.log('current scroll ():', window.pageXOffset, window.pageYOffset);

    // finding the height and width of the viewport is shown below.
    console.log(
      'height/width',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    );

    // Scrolling

    // this is the old way to scroll to the element in a non-smooth manner and in old browsers.
    // window.scrollTo(
    //   section1.getBoundingClientRect().left + window.pageXOffset,
    //   section1.getBoundingClientRect().top + window.pageYOffset
    // );

    // More effcient way to scroll to the element in smooth scrolling manner.
    // To implement smooth scrolling we need to pass an object with the left and top properties.
    // The left and top properties are the x and y coordinates of the elements.
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    // The smooth scrolling can also be implemented using the scrollIntoView method.
    // The scrollIntoView method is called on the element that we want to scroll to.
    // This is the mordern approach to scroll to the element.
    section1.scrollIntoView({ behavior: 'smooth' });
  });
}
