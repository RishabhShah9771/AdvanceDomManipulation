function manipulateDOM() {
  //Selecting Elements :
  // needs a . before the class name to select the elements of class.
  //returns a node list of the selected elements.
  const select = document.querySelector('.header');
  console.log(select);

  //Selecting Multiple Elements:
  //needs to have a . before the class name
  const selectAll = document.querySelectorAll('.section');
  console.log(selectAll);

  //Selecting Elements by ID;
  // this Selecter does not need a . before the class name
  //it needs to have a # before its id name.
  const selectedId = document.getElementById('section--1');
  console.log(selectedId);

  //Selecting Elements by tag name:
  //This selector does not need a . before the class name.
  // It returns a HTML collection of the selected elements.
  const selectedTag = document.getElementsByTagName('button');
  console.log(selectedTag);

  //Selecting Elements by class name:
  //This selector does not need a . before the class name.
  // It returns a HTML collection of the selected elements.
  const selectedClass = document.getElementsByClassName('btn');
  console.log(selectedClass);

  //Creating and Inserting Elements:
  // .insertAdjacentHTML
  // It is used to insert a string of HTML into the DOM.
  const message = document.createElement('div');
  message.classList.add('cookie-message');
  message.innerHTML =
    'We use cookies for imprtoved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';

  // prepend add elements as the first child of the selected element.
  // select.prepend(message);
  // prepened and append can be used multiple times to add multiple elements.
  // append add elements as the last child of the selected elements.
  select.append(message);
  // select.append(message.cloneNode(true));
  // Clone node will add the same element multiple times.

  // before and after are used to add elements before and after the selected element.
  // select.before(message);
  // select.after(message);

  //Delete Elements:
  document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function (e) {
      e.preventDefault();
      // we just need to select the element and use the remove method to delete the element.
      // This is known as DOM traversing. to delete element.
      // message.parentElement.removeChild(message);
      message.remove();
    });

  //Styles, Attributes and Classes:

  //Styles:
  // We can change the style of the element using the style property.
  // Using the style property we can change the css properties of the element.
  // We can only do inline styling using the style property.
  // we can also use the getComputedStyle method to get the computed style of the element.
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';
  console.log(
    (message.style.height =
      Number.parseFloat(getComputedStyle(message).height) + 40 + 'px')
  );

  // We can also use the setProperty method to change the css properties of the element from the root in javascript.
  // This is useful when we want to change the css properties of the element from the root.
  document.documentElement.style.setProperty('--color-primary', 'orangered');

  //Attributes:
  // We can change the attributes of the element using the setAttribute method.
  // we can also get the attributes of the element using the getAttribute method.
  // If we want to remove the attribute of the element we can use the removeAttribute method.
  // we can also use the hasAttribute method to check if the element has the attribute or not. and will return a boolean value.
  const logo = document.querySelector('.nav__logo');
  console.log(logo.alt);
  console.log(logo.src);
  console.log(logo.getAttribute('src'));
  console.log(logo.hasAttribute('src'));
  logo.setAttribute('designer', 'rishabh');
  console.log(logo.getAttribute('designer'));
  logo.removeAttribute('designer');
  console.log(logo.hasAttribute('designer'));

  //Data Attributes:
  // We can also use the data attributes to store the data in the element.
  // It has to start with data.
  // we can access the data using dataset property.
  // we can also use the getAttribute method to get the data attribute.
  console.log(logo.dataset.versionNumber);

  // Classes:
  // We can add classes to the element using the classlist property.
  // We can use the add method to add the class to the element.
  // We can use the reomve method to remove the class from the element.
  // we can use the toggle method to toggle the class of the element.
  // we can use the contains method to check if the element contains the class or not.
  // we can add multiple classes by passing multiple values in the add method and all other methods as well.
  logo.classList.add('c', 'j');
  logo.classList.toggle('c');
  logo.classList.contains('c');
  logo.classList.remove('c', 'j');
}

manipulateDOM();
// Call the function to execute the code
export default manipulateDOM;
