import './component.js';

const toggle = document.querySelector('#toggle');
const main = document.querySelector('main');

toggle.addEventListener('change', e => {
  if (e.target.checked) {
    main.appendChild(document.createElement('x-component'));
  } else {
    main.removeChild(document.querySelector('x-component'))
  }
});