const template = document.createElement('template');
template.innerHTML = `
  <button>click me!</button>
`;

class XComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', () => this.handleClick());
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('customClick', { detail: Math.random() }));
  }
}

customElements.define('x-component', XComponent);
