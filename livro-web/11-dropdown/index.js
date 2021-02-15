import './dropdown.js';

const dropdown = document.querySelector('x-dropdown');

dropdown.title = 'Custom Title';
dropdown.addEventListener('show', e => console.log(e));
setTimeout(() => dropdown.title = 'New Custom Title', 3000);