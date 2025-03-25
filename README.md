# AdvanceDomManipulation

## What is DOM?

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, enabling developers to manipulate its content and structure programmatically.

### Key Features of the DOM:
1. **Dynamic Interaction**:  
    The DOM allows JavaScript to interact with the browser, enabling dynamic updates to the content, structure, and style of a webpage without requiring a full reload.

2. **Capabilities with JavaScript**:  
    - Create, modify, and delete HTML elements dynamically.  
    - Set or update styles, classes, and attributes of elements.  
    - Add event listeners to respond to user interactions like clicks, keypresses, or mouse movements.

3. **DOM Tree**:  
    - The DOM tree is generated from an HTML document and represents the hierarchical structure of the document.  
    - Each node corresponds to a part of the document (e.g., elements, attributes, text).

### Common DOM Methods and Properties:
1. `document.querySelector()` - Select elements.  
2. `element.classList.add()` - Add a class to an element.  
3. `element.addEventListener()` - Attach event listeners.  

Understanding and utilizing the DOM is fundamental for creating interactive and dynamic web applications.
- Dom needs to store in each different elements in the dom so different type of elements are been created to perform this task.
- All this operations work because of inheritance as it inherits all methods and properties of parents.
- Each of the elements have access to properties and methods from their parent elements and some have more properties to access as well.
- Event listner can be called on all elements of the node tree.

## SELECTING, DELETING AND CREATING ELEMENTS

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

By combining these methods, you can dynamically manipulate the DOM to create interactive and responsive web applications.
