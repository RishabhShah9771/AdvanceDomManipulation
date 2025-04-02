# Advanced DOM Manipulation

## What is the DOM?

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, enabling developers to manipulate its content and structure programmatically.

### Key Features of the DOM

1. **Dynamic Interaction**  
    The DOM allows JavaScript to interact with the browser, enabling dynamic updates to the content, structure, and style of a webpage without requiring a full reload.

2. **Capabilities with JavaScript**  
    - Create, modify, and delete HTML elements dynamically.  
    - Set or update styles, classes, and attributes of elements.  
    - Add event listeners to respond to user interactions like clicks, keypresses, or mouse movements.

3. **DOM Tree**  
    - The DOM tree is generated from an HTML document and represents the hierarchical structure of the document.  
    - Each node corresponds to a part of the document (e.g., elements, attributes, text).

### Common DOM Methods and Properties

- `document.querySelector()` - Select elements.  
- `element.classList.add()` - Add a class to an element.  
- `element.addEventListener()` - Attach event listeners.  

Understanding and utilizing the DOM is fundamental for creating interactive and dynamic web applications.

---

## Selecting, Deleting, and Creating Elements

### Selecting Elements

To interact with elements in the DOM, you first need to select them. JavaScript provides several methods for selecting elements:

1. **`document.querySelector()`**  
    Selects the first element that matches a specified CSS selector.  
    ```javascript
    const header = document.querySelector('h1');
    console.log(header.textContent); // Logs the text content of the first <h1> element
    ```

2. **`document.querySelectorAll()`**  
    Selects all elements that match a specified CSS selector and returns a NodeList.  
    ```javascript
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => console.log(btn.textContent)); // Logs the text content of all elements with the class 'btn'
    ```

3. **`document.getElementById()`**  
    Selects an element by its ID.  
    ```javascript
    const main = document.getElementById('main-section');
    console.log(main); // Logs the element with the ID 'main-section'
    ```

4. **`document.getElementsByClassName()`**  
    Selects all elements with a specific class name and returns an HTMLCollection.  
    ```javascript
    const items = document.getElementsByClassName('item');
    console.log(items); // Logs an HTMLCollection of elements with the class 'item'
    ```

5. **`document.getElementsByTagName()`**  
    Selects all elements with a specific tag name and returns an HTMLCollection.  
    ```javascript
    const paragraphs = document.getElementsByTagName('p');
    console.log(paragraphs); // Logs an HTMLCollection of all <p> elements
    ```

---

### Deleting Elements

You can remove elements from the DOM using the following methods:

1. **`element.remove()`**  
    Removes the element from the DOM.  
    ```javascript
    const element = document.querySelector('.to-remove');
    element.remove(); // Removes the element with the class 'to-remove'
    ```

2. **`parentElement.removeChild()`**  
    Removes a child element from its parent.  
    ```javascript
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');
    parent.removeChild(child); // Removes the child element from the parent
    ```

---

### Creating Elements

You can dynamically create new elements and add them to the DOM:

1. **`document.createElement()`**  
    Creates a new element.  
    ```javascript
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Hello, World!';
    newDiv.classList.add('greeting');
    document.body.appendChild(newDiv); // Adds the new <div> to the end of the <body>
    ```

2. **`element.insertAdjacentHTML()`**  
    Inserts HTML directly into the DOM at a specified position.  
    ```javascript
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', '<p>New paragraph added!</p>');
    ```

3. **`element.append()` and `element.prepend()`**  
    Adds elements or text at the end or beginning of a parent element.  
    ```javascript
    const list = document.querySelector('.list');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.append(newItem); // Adds the new item to the end of the list
    list.prepend(newItem); // Adds the new item to the beginning of the list
    ```

4. **`element.cloneNode()`**  
    Creates a copy of an existing element.  
    ```javascript
    const original = document.querySelector('.original');
    const clone = original.cloneNode(true); // Clones the element and its children
    document.body.appendChild(clone); // Adds the cloned element to the <body>
    ```

---

## Styles, Attributes, and Classes

### Styles

You can change the style of an element using the `style` property.  
```javascript
const message = document.querySelector('.message');
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(getComputedStyle(message).height); // Logs the computed height of the element
```

You can also use `setProperty` to modify CSS variables:  
```javascript
document.documentElement.style.setProperty('--color-primary', 'orangered');
```

---

### Attributes

You can manipulate attributes using the following methods:  
- `setAttribute()` - Sets an attribute.  
- `getAttribute()` - Gets an attribute.  
- `removeAttribute()` - Removes an attribute.  
- `hasAttribute()` - Checks if an attribute exists.  

Example:  
```javascript
const logo = document.querySelector('.nav__logo');
logo.setAttribute('designer', 'Rishabh');
console.log(logo.getAttribute('designer')); // Logs 'Rishabh'
logo.removeAttribute('designer');
```

---

### Data Attributes

Data attributes allow you to store custom data in elements.  
```javascript
const logo = document.querySelector('.nav__logo');
console.log(logo.dataset.versionNumber); // Accesses the data-version-number attribute
```

---

### Classes

You can manipulate classes using the `classList` property:  
- `add()` - Adds a class.  
- `remove()` - Removes a class.  
- `toggle()` - Toggles a class.  
- `contains()` - Checks if a class exists.  

Example:  
```javascript
const logo = document.querySelector('.nav__logo');
logo.classList.add('new-class');
logo.classList.remove('old-class');
logo.classList.toggle('active');
console.log(logo.classList.contains('active')); // Logs true or false
```

---

## Scrolling

You can scroll to elements using the `scrollIntoView` method:  
```javascript
document.querySelector('#section--1').scrollIntoView({ behavior: 'smooth' });
```

---

## Event Listeners

Event listeners allow you to respond to user interactions.  
```javascript
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Button clicked!');
});
```

The `event` object provides details about the event, such as the target element and coordinates.

By mastering these DOM manipulation techniques, you can create dynamic, interactive, and responsive web applications.

---

## Mouse Events

Mouse events allow you to respond to user interactions with the mouse, such as hovering, clicking, or moving the cursor over an element.

### Example: `mouseenter` Event

The `mouseenter` event is triggered when the mouse pointer enters the boundaries of an element. You can use it to execute a function when this event occurs.

```javascript
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
     e.preventDefault();
     alert('Hello');
});
```

In this example:
- The `addEventListener` method is used to attach the `mouseenter` event to the `<h1>` element.
- When the mouse pointer enters the `<h1>` element, an alert box with the message "Hello" is displayed.

---

## Event Propagation: Bubbling and Capturing

When an event occurs, it propagates through the DOM in two phases: **capturing** and **bubbling**.

### Bubbling Phase

In the bubbling phase, the event starts from the target element and propagates up to the root element. This is the default behavior of most events.

```javascript
const child = document.querySelector('.child');
const parent = document.querySelector('.parent');

child.addEventListener('click', function (e) {
     console.log('Child clicked');
});

parent.addEventListener('click', function (e) {
     console.log('Parent clicked');
});
```

You can stop the bubbling phase using the `stopPropagation` method:

```javascript
child.addEventListener('click', function (e) {
     e.stopPropagation();
     console.log('Child clicked');
});
```

---

## Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element to manage events for its child elements. Instead of adding individual event listeners to each child, the parent element listens for events and determines which child triggered the event.

### Example: Smooth Scrolling with Event Delegation

```javascript
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
      const targetId = e.target.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  }
});
```

---

## Sticky Navigation

Sticky navigation keeps a navigation bar fixed at the top of the viewport as the user scrolls down the page.

### Example: Implementing Sticky Navigation

```javascript
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
     if (window.scrollY > initialCoords.top) {
          nav.classList.add('sticky');
     } else {
          nav.classList.remove('sticky');
     }
});
```

---

## Slider

A slider allows users to navigate through a series of items, such as images or content sections.

### Example: Implementing a Basic Slider

```javascript
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
     slides.forEach((s, i) => {
          s.style.transform = `translateX(${100 * (i - slide)}%)`;
     });
};

goToSlide(0);

const nextSlide = function () {
     currentSlide = (currentSlide === maxSlide - 1) ? 0 : currentSlide + 1;
     goToSlide(currentSlide);
};

const prevSlide = function () {
     currentSlide = (currentSlide === 0) ? maxSlide - 1 : currentSlide - 1;
     goToSlide(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
```

---

By mastering these techniques, you can create dynamic, interactive, and user-friendly web applications.

## DOMContentLoaded, Load, and BeforeUnload Events

### 1. `DOMContentLoaded` Event

The `DOMContentLoaded` event is triggered when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This is useful for executing JavaScript as soon as the DOM is ready.

#### Example:
```javascript
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const header = document.querySelector('h1');
    header.style.color = 'blue';
});
```

In this example:
- The `DOMContentLoaded` event ensures that the script runs only after the DOM is fully loaded.
- The `<h1>` element's color is changed to blue once the DOM is ready.

---

### 2. `load` Event

The `load` event is triggered when the entire page, including all dependent resources such as stylesheets and images, has finished loading. This is useful for executing scripts that depend on the complete loading of the page.

#### Example:
```javascript
window.addEventListener('load', function () {
    console.log('Page fully loaded');
    const img = document.querySelector('img');
    img.style.border = '5px solid green';
});
```

In this example:
- The `load` event ensures that the script runs only after all resources, including images, are fully loaded.
- A green border is added to an image once the page is completely loaded.

---

### 3. `beforeunload` Event

The `beforeunload` event is triggered when the user is about to leave the page. This is often used to show a confirmation dialog to prevent accidental navigation away from the page.

#### Example:
```javascript
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = ''; // Required for some browsers to show the confirmation dialog
    console.log('User is attempting to leave the page');
});
```

In this example:
- The `beforeunload` event prompts the user with a confirmation dialog when they try to leave the page.
- This is useful for warning users about unsaved changes or other important actions.

---

By understanding these events, you can control the behavior of your web application during different stages of the page lifecycle.

## DEFER and ASYNC Script Loading

When including JavaScript in your HTML, the way scripts are loaded can significantly impact the performance of your web application. Two common attributes used to control script loading are `defer` and `async`.

### 1. `defer` Attribute

The `defer` attribute ensures that the script is downloaded in parallel with the HTML parsing but is executed only after the HTML document has been fully parsed.

#### Key Features:
- Scripts are executed in the order they appear in the document.
- Useful for scripts that depend on the DOM being fully loaded.

#### Example:
```html
<script src="script.js" defer></script>
```

In this example:
- The `script.js` file is downloaded while the HTML is being parsed.
- The script is executed only after the HTML parsing is complete.

---

### 2. `async` Attribute

The `async` attribute allows the script to be downloaded in parallel with the HTML parsing and executed as soon as it is ready, without waiting for the HTML to finish parsing.

#### Key Features:
- Scripts are executed as soon as they are downloaded, which may lead to out-of-order execution.
- Useful for scripts that do not depend on other scripts or the DOM.

#### Example:
```html
<script src="script.js" async></script>
```

In this example:
- The `script.js` file is downloaded while the HTML is being parsed.
- The script is executed as soon as it is ready, potentially before the HTML parsing is complete.

---

### Comparison of `defer` and `async`

| Attribute | Execution Order | When to Use |
|-----------|-----------------|-------------|
| `defer`   | In order of appearance | For scripts that depend on the DOM or other scripts. |
| `async`   | As soon as ready (out of order) | For independent scripts that do not rely on the DOM or other scripts. |

---

### Best Practices

- Use `defer` for scripts that manipulate the DOM or depend on other scripts.
- Use `async` for analytics or tracking scripts that do not interact with the DOM.

By understanding and using `defer` and `async` appropriately, you can optimize the loading performance of your web applications.