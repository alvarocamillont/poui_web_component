class XComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = 'Hello World from a Web Component!';
  }
}

customElements.define('x-component', XComponent);