/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(arr) {
  const div = document.createElement('div');
  div.classList.add('menu');
  div.dataset.isOpen = false;

  div.appendChild(arr.reduce((ul, liContent) => {
    const li = document.createElement('li');
    li.textContent = liContent;
    ul.appendChild(li);
    return ul;
  }, document.createElement('ul')));

  const menuButton = document.querySelector('.menu-button');
  
  menuButton.addEventListener('click', function(e) {
    if(div.dataset.isOpen === 'false') {
      gsap.to(div, { duration: 1, x: 350 });
      div.dataset.isOpen = true;
      e.stopPropagation();
    } 
  });

  window.addEventListener('click', function(e) {
    if (div.dataset.isOpen === 'true' && (e.target === div || !div.contains(e.target))) {
      gsap.to(div, { duration: 2, x: -350 });
      div.dataset.isOpen = false;
    };
  });

  return div;
};

// Prepend menu to the header
document.querySelector('.header').prepend(createMenu(menuItems));