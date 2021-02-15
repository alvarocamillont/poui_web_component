import './character-list.js';
import './character-detail.js';

const characterListComponent =  document.querySelector('x-character-list');
const characterDetailComponent =  document.querySelector('x-character-detail');

characterListComponent.addEventListener('selectCharacter', e => characterDetailComponent.character = e.detail);

fetch('https://swapi.dev/api/people/')
  .then(res => res.json())
  .then(data => {
    characterListComponent.characters = data.results;
    characterDetailComponent.character = data.results[0];
  });
