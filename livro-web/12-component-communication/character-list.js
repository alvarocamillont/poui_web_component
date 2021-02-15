const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      display: block;
      padding: 12px;
      width: 100%;
    }
  </style>
  <section></section>
`;

class XCharacterList extends HTMLElement {
  get characters() {
    return this._characters;
  }

  set characters(value) {
    this._characters = value;
    this._render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.characterListElement = this.shadowRoot.querySelector('section');
  }

  _render() {
    this._characters.forEach(character => {
      const button = document.createElement('button');
      button.appendChild(document.createTextNode(character.name));
      button.addEventListener('click', () => this.dispatchEvent(new CustomEvent('selectCharacter', { detail: character })));
      this.characterListElement.appendChild(button);
    });
  }
}

customElements.define('x-character-list', XCharacterList);
