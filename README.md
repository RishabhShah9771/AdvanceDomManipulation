# Advanced DOM Manipulation

## What is the DOM?

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, enabling developers to manipulate its content and structure programmatically.

### Key Features of the DOM:
1. **Dynamic Interaction**  
    The DOM allows JavaScript to interact with the browser, enabling dynamic updates to the content, structure, and style of a webpage without requiring a full reload.

2. **Capabilities with JavaScript**  
    - Create, modify, and delete HTML elements dynamically.  
    - Set or update styles, classes, and attributes of elements.  
    - Add event listeners to respond to user interactions like clicks, keypresses, or mouse movements.

3. **DOM Tree**  
    - The DOM tree is generated from an HTML document and represents the hierarchical structure of the document.  
    - Each node corresponds to a part of the document (e.g., elements, attributes, text).

### Common DOM Methods and Properties:
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

Mouse events like `mouseenter` are useful for creating interactive effects, such as tooltips, hover animations, or dynamic content updates.
### Advanced Mouse Events and Event Propagation

#### Modern Way of Using Mouse Events

You can use `addEventListener` to attach mouse events dynamically. Here's an example of using the `mouseenter` event with a modern approach:

```javascript
const h1 = document.querySelector('h1');

// Modern way of using mouse events
const alertH1 = function (e) {
    e.preventDefault();
    alert('Hello');
    h1.removeEventListener('mouseenter', alertH1); // Removes the event listener after execution
};

h1.addEventListener('mouseenter', alertH1);

// Automatically remove the event listener after 3 seconds
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
```

In this example:
- The `mouseenter` event is attached to the `<h1>` element.
- The event listener is removed after the first execution or after 3 seconds, whichever comes first.

---

#### Old-School Way of Using Mouse Events

Before `addEventListener`, mouse events were often handled using properties like `onmouseenter`. While this approach is less flexible, it is still supported:

```javascript
h1.onmouseenter = e => {
    e.preventDefault();
    alert('Hello');
};
```

---

#### Inline Event Handling in HTML

Mouse events can also be handled directly in HTML using inline event attributes. This approach is generally discouraged as it mixes HTML and JavaScript, but it can be useful for simple cases:

```html
<h1 onmouseenter="alert('Hello')">Hover over me</h1>
```

---

### Event Propagation: Bubbling and Capturing

When an event occurs, it propagates through the DOM in two phases: **capturing** and **bubbling**.

#### Bubbling Phase

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

If you click on the `.child` element:
- "Child clicked" will be logged first.
- Then, "Parent clicked" will be logged as the event bubbles up.

You can stop the bubbling phase using the `stopPropagation` method:

```javascript
child.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('Child clicked');
});
```

#### Capturing Phase

In the capturing phase, the event starts from the root element and propagates down to the target element. To listen for events during the capturing phase, pass `{ capture: true }` as an option to `addEventListener`:

```javascript
parent.addEventListener(
    'click',
    function (e) {
        console.log('Parent clicked during capturing phase');
    },
    { capture: true }
);
```

---

#### Example: Combining Bubbling and Capturing

```javascript
document.querySelector('.grandparent').addEventListener(
    'click',
    function () {
        console.log('Grandparent clicked (capturing)');
    },
    { capture: true }
);

document.querySelector('.parent').addEventListener('click', function () {
    console.log('Parent clicked (bubbling)');
});

document.querySelector('.child').addEventListener('click', function () {
    console.log('Child clicked');
});
```

If you click on the `.child` element:
1. "Grandparent clicked (capturing)" will be logged first (capturing phase).
2. "Child clicked" will be logged next (target phase).
3. "Parent clicked (bubbling)" will be logged last (bubbling phase).

---

By understanding and leveraging event propagation, you can create more efficient and organized event handling in your web applications.

### Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element to manage events for its child elements. Instead of adding individual event listeners to each child, the parent element listens for events and determines which child triggered the event. This approach is efficient, especially when dealing with a large number of child elements.

#### How Event Delegation Works

1. **Event Propagation**  
    Event delegation relies on the bubbling phase of event propagation. When an event occurs on a child element, it bubbles up to its parent, allowing the parent to handle the event.

2. **Event Targeting**  
    The `event.target` property identifies the specific child element that triggered the event. This allows the parent to respond appropriately.

#### Benefits of Event Delegation

- **Performance**: Reduces the number of event listeners, improving performance for large DOM structures.
- **Dynamic Elements**: Handles events for dynamically added child elements without needing to reattach listeners.

#### Example: Smooth Scrolling with Event Delegation

In this example, we use event delegation to implement smooth scrolling for navigation links:

```javascript
// Attach a single event listener to the parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Check if the clicked element is a navigation link
  if (e.target.classList.contains('nav__link')) {
     const targetId = e.target.getAttribute('href'); // Get the target section ID
     document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
  }
});
```

#### Explanation:

1. The event listener is attached to the `.nav__links` parent element.
2. Inside the event handler:
    - The `e.target` property identifies the clicked element.
    - The `classList.contains('nav__link')` method ensures the event is handled only for elements with the `nav__link` class.
    - The `getAttribute('href')` method retrieves the target section's ID.
    - The `scrollIntoView` method performs smooth scrolling to the target section.

This approach eliminates the need to attach individual event listeners to each navigation link, making the code more efficient and easier to maintain.

### Navigating the DOM: Parent, Child, and Sibling Elements

Understanding how to navigate the DOM is crucial for selecting and manipulating elements effectively. Here's how you can traverse the DOM tree:

---

#### Going Downwards: Selecting Child Elements

You can select child elements of a specific parent element using various methods:

1. **`querySelectorAll()`**  
    ### Sticky Navigation

    Sticky navigation is a technique where a navigation bar remains fixed at the top of the viewport as the user scrolls down the page. This improves user experience by keeping the navigation easily accessible.

    #### Example: Implementing Sticky Navigation

    ```javascript
    // Select the navigation bar and the target section
    const nav = document.querySelector('.nav');
    const section1 = document.querySelector('#section--1');

    // Get the initial coordinates of the target section
    const initialCoords = section1.getBoundingClientRect();

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function () {
        // Check the current scroll position
        if (window.scrollY > initialCoords.top) {
            nav.classList.add('sticky'); // Add the 'sticky' class when the user scrolls past the target section
        } else {
            nav.classList.remove('sticky'); // Remove the 'sticky' class when the user scrolls back up
        }
    });
    ```

    #### Explanation:

    1. **`getBoundingClientRect()`**  
         - Retrieves the position of the target section relative to the viewport.
         - The `top` property is used to determine when the user has scrolled past the section.

    2. **`window.scrollY`**  
         - Tracks the vertical scroll position of the page.

    3. **Adding and Removing Classes**  
         - The `sticky` class is added to the navigation bar when the scroll position exceeds the target section's top position.
         - The class is removed when the user scrolls back above the target section.

    #### CSS for Sticky Navigation

    To make the navigation bar visually sticky, you can define the `sticky` class in your CSS:

    ```css
    .nav.sticky {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }
    ```

    This ensures the navigation bar stays fixed at the top of the viewport with a slight background and shadow effect for better visibility.

    #### Notes:

    - This approach is simple but may not be the most efficient for performance, especially on pages with heavy scrolling.
    - For better performance, consider using the **Intersection Observer API**, which is optimized for detecting element visibility changes.

    By implementing sticky navigation, you can enhance the usability and accessibility of your web application.

    ### Slider

    A slider is a UI component that allows users to navigate through a series of items, such as images or content sections, by sliding them horizontally or vertically.

    #### Example: Implementing a Basic Slider

    ```javascript
    // Select slider elements
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');

    let currentSlide = 0;
    const maxSlide = slides.length;

    // Function to go to a specific slide
    const goToSlide = function (slide) {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
    };

    // Initialize the slider
    goToSlide(0);

    // Function to go to the next slide
    const nextSlide = function () {
        if (currentSlide === maxSlide - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        goToSlide(currentSlide);
    };

    // Function to go to the previous slide
    const prevSlide = function () {
        if (currentSlide === 0) {
            currentSlide = maxSlide - 1;
        } else {
            currentSlide--;
        }
        goToSlide(currentSlide);
    };

    // Event listeners for navigation buttons
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
    ```

    #### Explanation:

    1. **HTML Structure**  
         Ensure your HTML includes a container for the slides and navigation buttons:
         ```html
         <div class="slider">
             <div class="slide">Slide 1</div>
             <div class="slide">Slide 2</div>
             <div class="slide">Slide 3</div>
             <button class="slider__btn slider__btn--left">&larr;</button>
             <button class="slider__btn slider__btn--right">&rarr;</button>
         </div>
         ```

    2. **CSS for Styling**  
         Add CSS to style the slider and position the slides:
         ```css
         .slider {
             position: relative;
             overflow: hidden;
             width: 100%;
         }

         .slide {
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             transform: translateX(100%);
             transition: transform 0.3s ease;
         }

         .slide:first-child {
             transform: translateX(0);
         }

         .slider__btn {
             position: absolute;
             top: 50%;
             transform: translateY(-50%);
             background-color: rgba(0, 0, 0, 0.5);
             color: white;
             border: none;
             cursor: pointer;
             z-index: 10;
         }

         .slider__btn--left {
             left: 10px;
         }

         .slider__btn--right {
             right: 10px;
         }
         ```

    3. **JavaScript Logic**  
         - The `goToSlide` function positions the slides based on their index relative to the `currentSlide`.
         - The `nextSlide` and `prevSlide` functions update the `currentSlide` index and call `goToSlide` to update the view.
         - Event listeners on the navigation buttons trigger the slide transitions.

    #### Notes:

    - You can enhance the slider by adding features like infinite looping, autoplay, or touch/swipe support.
    - For better performance and flexibility, consider using a library like Swiper.js or Slick Slider for advanced sliders.

    By implementing a slider, you can create an engaging and interactive way to display content on your web application.