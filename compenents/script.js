'use strict';
import { modal, overlay, btnCloseModal, btnsOpenModal } from './domElements.js';

// Modal window
const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// button OpenModal using forEach.
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Alernative Way to add Event Listener
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

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

//.insertAdjacentHTML
// It is used to insert a string of HTML into the DOM.

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for imprtoved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';

// prepend add elements as the first child of the selected element.
select.prepend(message);
// prepened and append can be used multiple times to add multiple elements.
// append add elements as the last child of the selected elements.
select.append(message);
select.append(message.cloneNode(true));
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
