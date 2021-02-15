const template = document.createElement('template');
template.innerHTML = `
  <p></p>
`;

class XComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  set name(value) {
    this._name = value;
    this.nameElement.innerText = this._name;
  }

  get name() {
    return this._name;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.nameElement = this.shadowRoot.querySelector('p');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'name') {
      this.name = newValue;
    }
  }
}

customElements.define('x-component', XComponent);
